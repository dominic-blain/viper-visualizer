const ITEMS_SCHEMA = {
	"ItemText": {
		"content": {
			"text": {
				"label": "Text",
				"type": "textarea",
				"options": [
					"text-style",
					"text-alignment"
				]
			}
		}
	},
	"ItemMarkdown": {
		"content": {
			"text": {
				"label": "Markdown",
				"type": "textarea",
				"options": [
					"text-style",
					"text-alignment"
				]
			}
		}
	},
	"ItemImage": {
		"content": {
			"image": {
				"label": "Image",
				"type": "image"
			},
			"caption": {
				"label": "Caption",
				"type": "line",
				"options": [
					"text-alignment"
				]
			}
		}
	}
}

export default ITEMS_SCHEMA;