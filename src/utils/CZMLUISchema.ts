const uiSchema = {
	positions: {
		cartesian: {
			'ui:widget': 'cartesian3_value',
		},
		cartographicDegrees: {
			'ui:widget': 'cartesian3_value',
		},
		cartographicRadians: {
			'ui:widget': 'cartesian3_value',
		},
	},

	cartesian: {
		'ui:widget': 'cartesian3_value',
	},
	cartographicDegrees: {
		'ui:widget': 'cartesian3_value',
	},
	cartographicRadians: {
		'ui:widget': 'cartesian3_value',
	},
	interval: {
		'ui:widget': 'double_date_time_picker',
	},
	backgroundColor: {
		rgba: {
			'ui:widget': 'color_rgba',
		},
		rgbaf: {
			'ui:widget': 'color_rgbaf',
		}
	},
	fillColor: {
		rgba: {
			'ui:widget': 'color_rgba',
		},
		rgbaf: {
			'ui:widget': 'color_rgbaf',
		}
	},
	outlineColor: {
		rgba: {
			'ui:widget': 'color_rgba',
		},
		rgbaf: {
			'ui:widget': 'color_rgbaf',
		}
	},
	material: {
		solidColor: {
			color: {
				rgba: {
					'ui:widget': 'color_rgba',
				},
				rgbaf: {
					'ui:widget': 'color_rgbaf',
				}
			}
		}
	},
	color: {
		rgba: {
			'ui:widget': 'color_rgba',
		},
		rgbaf: {
			'ui:widget': 'color_rgbaf',
		}
	},
	silhouetteColor: {
		rgba: {
			'ui:widget': 'color_rgba',
		},
		rgbaf: {
			'ui:widget': 'color_rgbaf',
		}
	}
}

export {
	uiSchema
}