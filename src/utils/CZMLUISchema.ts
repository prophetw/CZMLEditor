const uiSchema = {
	positions: {
		cartesian: {
			'ui:widget': 'cartesian3_value',
			'ui:option': {
				from: "positionList",
			}
		},
		cartographicDegrees: {
			'ui:widget': 'cartesian3_value',
			'ui:option': {
				from: "positionList",
			},
			from: "positionList",
		},
		cartographicRadians: {
			'ui:widget': 'cartesian3_value',
			'ui:option': {
				from: "positionList",
			}
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
		},
		polylineDash: {
			color: {
				rgba: {
					'ui:widget': 'color_rgba',
				},
				rgbaf: {
					'ui:widget': 'color_rgbaf',
				}
			},
			gapColor: {
				rgba: {
					'ui:widget': 'color_rgba',
				},
				rgbaf: {
					'ui:widget': 'color_rgbaf',
				}
			}

		},
		polylineGlow: {
			color: {
				rgba: {
					'ui:widget': 'color_rgba',
				},
				rgbaf: {
					'ui:widget': 'color_rgbaf',
				}
			}
		},
		polylineArrow: {
			color: {
				rgba: {
					'ui:widget': 'color_rgba',
				},
				rgbaf: {
					'ui:widget': 'color_rgbaf',
				}
			}
		},
		checkerboard: {
			evenColor: {
				rgba: {
					'ui:widget': 'color_rgba',
				},
				rgbaf: {
					'ui:widget': 'color_rgbaf',
				}
			},
			oddColor: {
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