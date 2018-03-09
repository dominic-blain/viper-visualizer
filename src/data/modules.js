const MODULES = {
	"ModuleMarkdown-1": {
		"id": "ModuleMarkdown-1",
		"type": "ModuleMarkdown",
		"title": "Title",
		"items": ["ItemMarkdown-1"],
		"options": {
			"width": "extra-big",
			"security-padding": "normal",
			"space-before": "normal",
			"space-after": "normal",
			"alignment": "center"
		}
	},
	"ModuleMarkdown-2": {
		"id": "ModuleMarkdown-2",
		"type": "ModuleMarkdown",
		"title": "Introduction",
		"items": ["ItemMarkdown-2"],
		"options": {
			"width": "normal",
			"security-padding": "normal",
			"space-before": "normal",
			"space-after": "normal",
			"alignment": "center"
		}
	},
	"ModuleImage-1": {
		"id": "ModuleImage-1",
		"type": "ModuleImage",
		"title": "Image",
		"items": ["ItemImage-1"],
		"options": {
			"width": "big",
			"security-padding": "normal",
			"space-before": "normal",
			"space-after": "normal",
			"alignment": "center"
		}
	},
	"ModuleMarkdown-3": {
		"id": "ModuleMarkdown-3",
		"type": "ModuleMarkdown",
		"title": "Text centered",
		"items": ["ItemMarkdown-3"],
		"options": {
			"width": "normal",
			"security-padding": "normal",
			"space-before": "normal",
			"space-after": "normal",
			"alignment": "center"
		}
	},
	"ModuleImage-2": {
		"id": "ModuleImage-2",
		"type": "ModuleImage",
		"title": "Image 2",
		"items": ["ItemImage-2"],
		"options": {
			"width": "big",
			"security-padding": "normal",
			"space-before": "normal",
			"space-after": "normal",
			"alignment": "center"
		}
	},
	"ModuleMarkdown-4": {
		"id": "ModuleMarkdown-4",
		"type": "ModuleMarkdown",
		"title": "Text left",
		"items": ["ItemMarkdown-4"],
		"options": {
			"width": "normal",
			"security-padding": "normal",
			"space-before": "normal",
			"space-after": "normal",
			"alignment": "center"
		}
	},
	"ModuleGrid-1": {
		"id": "ModuleGrid-1",
		"type": "ModuleGrid",
		"title": "Image Grid",
		"items": [
			"ItemImage-3",
			"ItemImage-4"
		],
		"options": {
			"width": "extra-big",
			"security-padding": "normal",
			"space-before": "small",
			"space-after": "normal",
			"alignment": "center",
			"column-count": "2",
			"vertical-gutter": "normal",
			"horizontal-gutter": "normal"
		}
	},
	"ModuleImage-3": {
		"id": "ModuleImage-3",
		"type": "ModuleImage",
		"title": "Big Image",
		"items": ["ItemImage-5"],
		"options": {
			"width": "extra-big",
			"security-padding": "normal",
			"space-before": "small",
			"space-after": "normal",
			"alignment": "center"
		}
	},
	"ModuleMarkdown-5": {
		"id": "ModuleMarkdown-5",
		"type": "ModuleMarkdown",
		"title": "List",
		"items": ["ItemMarkdown-5"],
		"options": {
			"width": "normal",
			"security-padding": "normal",
			"space-before": "normal",
			"space-after": "normal",
			"alignment": "center"
		}
	},
	"ModuleGrid-2" : {
      "id" : "ModuleGrid-2",
      "items" : [ "ItemMarkdown-6", "ItemMarkdown-7", "ItemMarkdown-8", "ItemMarkdown-9", "ItemMarkdown-10" ],
      "options" : {
        "alignment" : "center",
        "column-count" : "5",
        "horizontal-gutter" : "big",
        "security-padding" : "normal",
        "space-after" : "normal",
        "space-before" : "normal",
        "vertical-gutter" : "small",
        "width" : "site"
      },
      "title" : "Recipes: Title",
      "type" : "ModuleGrid"
    },
    "ModuleGrid-3" : {
      "id" : "ModuleGrid-3",
      "items" : [ "ItemMarkdown-12", "ItemMarkdown-13", "ItemMarkdown-14" ],
      "options" : {
        "alignment" : "center",
        "column-count" : "4",
        "horizontal-gutter" : "normal",
        "security-padding" : "normal",
        "space-after" : "normal",
        "space-before" : "normal",
        "vertical-gutter" : "normal",
        "width" : "site"
      },
      "title" : "Recipes: Text",
      "type" : "ModuleGrid"
    }
};

export default MODULES;