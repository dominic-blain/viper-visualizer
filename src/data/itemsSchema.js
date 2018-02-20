const ITEMS_SCHEMA = {
	"ItemText": {
		"content": {
			"Text": {
				"label": "Text",
				"input": "textarea",
				"options": [
					"text-style",
					"text-alignment"
				]
			}
		}
	},
	"ItemMarkdown": {
		"content": {
			"Text": {
				"label": "Markdown",
				"input": "textarea",
				"options": [
					"text-style",
					"text-alignment"
				]
			}
		}
	},
	"ItemImage": {
		"content": {
			"Image": {
				"label": "Image",
				"input": "image"
			},
			"Caption": {
				"label": "Caption",
				"input": "line",
				"options": [
					"text-alignment"
				]
			}
		}
	}
}

export default ITEMS_SCHEMA;