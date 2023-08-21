const fs = require('fs')
const path = require('path')


/**
 * register here  https://cloud.google.com/nodejs/docs/reference/translate/latest
 * gcloud init  then  gcloud auth application-default login
 */

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Instantiates a client
const translate = new Translate();

async function translateAtoB(text, targetLang='zh-CN') {
  // The target language

  // Translates some text into Russian
  const [translation] = await translate.translate(text, targetLang);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
	return translation;
}

const cmdArgs = process.argv 

let lang = cmdArgs[2]

const validLangAry = [
	'en-US',
	'zh-CN'
]

const keyNeedTranslate = [
	'title', 'description'
]


if(validLangAry.indexOf(lang) ===-1){
	lang = validLangAry[0]
}


const CZMLJSONSchemaPath = path.resolve(__dirname, '../Base')

// Custom the show name of the key in the property

const waitForHandleList = {
	// billboard: {
	// 	filename: 'Billboard.json',
	// 	path: path.join(CZMLJSONSchemaPath, 'Billboard.json'),
	// },
	// model: {
	// 	filename: 'Model.json',
	// 	path: path.join(CZMLJSONSchemaPath, 'Model.json'),
	// },
	// label: {
	// 	filename: 'Label.json',
	// 	path: path.join(CZMLJSONSchemaPath, 'Label.json'),
	// },
	// point: {
	// 	filename: 'Point.json',
	// 	path: path.join(CZMLJSONSchemaPath, 'Point.json'),
	// },
	// polyline: {
	// 	filename: 'Polyline.json',
	// 	path: path.join(CZMLJSONSchemaPath, 'Polyline.json'),
	// },
	position: {
		filename: 'Position.json',
		path: path.join(CZMLJSONSchemaPath, 'Position.json'),
	}
}

const handleKey = 'billboard';

let totalWords = 0;
const handleAddTitleToProperty = async (handleKey) => {
	const handleObj = waitForHandleList[handleKey]
	const handlePath = handleObj.path
	const jsonstr = fs.readFileSync(handlePath, 'utf-8')
	try {
		const jsonObj = JSON.parse(jsonstr)
		const properties = jsonObj.properties;
		if(jsonObj.hasOwnProperty('title')){
			const title = jsonObj['title']
			const translateTile = await translateAtoB(title, 'zh-CN')
			const titleWords = title.split(' ')
			totalWords += titleWords.length
			jsonObj['title'] = translateTile
		}
		if(jsonObj.hasOwnProperty('description')){
			const description = jsonObj['description']
			const descriptionWords = description.split(' ')
			totalWords += descriptionWords.length
			const translateDescription = await translateAtoB(description, 'zh-CN')
			jsonObj['description'] = translateDescription
		}
		if(properties){
			for (const key in properties) {
				if (properties.hasOwnProperty(key)) {
					const element = properties[key];

					if(element.hasOwnProperty('title')){
						const title = element['title']
						const titleWords = title.split(' ')
						totalWords += titleWords.length
						const translateTile = await translateAtoB(title, 'zh-CN')
						element['title'] = translateTile
					}
					if(element.hasOwnProperty('description')){
						const description = element['description']
						const descriptionWords = description.split(' ')
						totalWords += descriptionWords.length
						const translateDescription = await translateAtoB(description, 'zh-CN')
						element['description'] = translateDescription
					}
				}
			}
			fs.writeFileSync(handlePath, JSON.stringify(jsonObj, null, 4))
		}
	} catch (error) {
		
	}
}


// for (const key in waitForHandleList) {
// 	if (waitForHandleList.hasOwnProperty(key)) {
// 		handleAddTitleToProperty(key)
// 	}
// }
// console.log(' totalWords- --- - ', totalWords);

// handleAddTitleToProperty(handleKey)


// test translate api 
// const str = 'hello world'
// const targetLang = 'zh-CN'
// translateAtoB(str, targetLang)
