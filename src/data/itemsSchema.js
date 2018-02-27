const ITEMS_SCHEMA = {
	"ItemText": {
		"label": "Text",
		"content": {
			"Text": {
				"label": "Text",
				"input": "textarea",
				"optionsDefaults": [
					"normal",
					"center"
				],
				"options": [
					"text-style",
					"text-alignment"
				]
			}
		}
	},
	"ItemMarkdown": {
		"label": "Markdown",
		"content": {
			"Text": {
				"label": "Markdown",
				"input": "textarea",
				"optionsDefaults": [
					"normal",
					"center"
				],
				"options": [
					"text-style",
					"text-alignment"
				]
			}
		}
	},
	"ItemImage": {
		"label": "Image",
		"content": {
			"Image": {
				"label": "Image",
				"input": "image"
			},
			"Caption": {
				"label": "Caption",
				"input": "line",
				"optionsDefaults": [
					"center"
				],
				"options": [
					"text-alignment"
				]
			}
		}
	}
}

export default ITEMS_SCHEMA;