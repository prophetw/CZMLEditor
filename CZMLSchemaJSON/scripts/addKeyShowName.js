const fs = require('fs')
const path = require('path')

const KeyShowNameMap = require('./keyShowName')

const CZMLJSONSchemaPath = path.resolve(__dirname, '../Base')

const waitForHandleList = {
	billboard: {
		path: path.join(CZMLJSONSchemaPath, 'Billboard.json'),
	},
	model: {
		path: path.join(CZMLJSONSchemaPath, 'Model.json'),
	},
	label: {
		path: path.join(CZMLJSONSchemaPath, 'Label.json'),
	},
	point: {
		path: path.join(CZMLJSONSchemaPath, 'Point.json'),
	},
	polyline: {
		path: path.join(CZMLJSONSchemaPath, 'Polyline.json'),
	},
}

const handleKey = 'billboard';

const handleAddTitleToProperty = (handleKey) => {
	const handleObj = waitForHandleList[handleKey]
	const titleKeyMap = KeyShowNameMap[handleKey]
	const handlePath = handleObj.path
	const jsonstr = fs.readFileSync(handlePath, 'utf-8')
	try {
		const jsonObj = JSON.parse(jsonstr)
		const properties = jsonObj.properties;
		if(properties){
			for (const key in properties) {
				if (properties.hasOwnProperty(key)) {
					const element = properties[key];
					const title = titleKeyMap[key]
					if(title){
						element.title = title
					}
				}
			}
			fs.writeFileSync(handlePath, JSON.stringify(jsonObj, null, 4))
		}
	} catch (error) {
		
	}
}


for (const key in waitForHandleList) {
	if (waitForHandleList.hasOwnProperty(key)) {
		handleAddTitleToProperty(key)
	}
}

// handleAddTitleToProperty(handleKey)