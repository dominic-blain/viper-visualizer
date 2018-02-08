const MODULES = {
	"ModuleText": {
		"content": {
			text: {
				"label": "Text",
				"type": "textarea"
			}
		},
		"options": [
			"width",
			"security-padding",
			"space-before",
			"space-after",
			"alignment",
			"text-style",
			"text-alignment"
		]
	},
	"ModuleImage": {
		"content": {
			image: {
				"label": "Image",
				"type": "upload"
			},
			caption: {
				"label": "Caption",
				"type": "line",
			}
		},
		"options": [
			"width",
			"security-padding",
			"space-before",
			"space-after",
			"alignment"
		]
	},
	"ModuleGrid": {
		"content": {
			items: {
				"label": "Items",
				"type": {
					list: [
						"image",
						"text"
					]
				}
			}
		},
		"options": [
			"width",
			"security-padding",
			"space-before",
			"space-after",
			"alignment",
			"column-count",
			"vertical-gutter",
			"horizontal-gutter"
		]
	}
};

export default MODULES;