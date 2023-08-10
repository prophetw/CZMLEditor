const def = {
	"definitions": {
		"Color.json": {
			"oneOf": [
				{
					"type": "object",
					"description": "A color.",
					"properties": {
						"rgba": {
							"type": "array",
							"items": {
								"type": "number",
								"minimum": 0,
								"maximum": 255,
								"default": 0
							},
							"minItems": 4,
							"maxItems": 4,
							"title": "RGBAF Color"
						}
					},
					"title": "RGBA Color 0~255",
					"required": [
						"rgba"
					],
					"default": {
						"rgba": [
							255,
							255,
							255,
							128
						]
					}
				},
				{
					"type": "object",
					"description": "A color. The color can optionally vary over time.",
					"properties": {
						"rgbaf": {
							"type": "array",
							"items": {
								"type": "number",
								"minimum": 0,
								"maximum": 1
							},
							"minItems": 4,
							"maxItems": 4,
							"title": "RGBAF Color"
						}
					},
					"title": "RGBAF Color 0~1",
					"required": [
						"rgbaf"
					],
					"default": {
						"rgbaf": [
							1,
							0,
							0,
							0.5
						]
					}
				}
			]
		}
	},
	"oneOf": [
		{
			"type": "null",
			"title": "undefined"
		},
		{
			"type": "object",
			"title": "Solid Color",
			"properties": {
				"solidColor": {
					"type": "object",
					"properties": {
						"color": {
							"$ref": "#/definitions/Color.json"
						}
					}
				}
			},
			"required": [
				"solidColor"
			],
			"additionalProperties": false
		},
		{
			"type": "object",
			"title": "Checkerboard",
			"properties": {
				"checkerboard": {
					"type": "object",
					"properties": {
						"evenColor": {
							"$ref": "#/definitions/Color.json"
						},
						"oddColor": {
							"$ref": "#/definitions/Color.json"
						},
						"repeat": {
							"oneOf": [
								{
									"type": "null"
								},
								{
									"type": "number"
								}
							]
						},
						"required": [
							"evenColor",
							"oddColor"
						]
					}
				}
			},
			"required": [
				"checkerboard"
			],
			"additionalProperties": false
		}
	]
}