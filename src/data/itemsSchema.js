const ITEMS_SCHEMA = {
	"ItemText": {
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