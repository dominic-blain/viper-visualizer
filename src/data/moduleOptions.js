const MODULE_OPTIONS = {
	"width": {
		"label": "Width",
		"type": "dropdown",
		"options": [
			{
				"value": "fullscreen",
				"label": "Fullscreen"
			},
			{
				"value": "site",
				"label": "Site"
			},
			{
				"value": "extra-big",
				"label": "Extra Big"
			},
			{
				"value": "big",
				"label": "Big"
			},
			{
				"value": "normal",
				"label": "Normal"
			},
			{
				"value": "small",
				"label": "Small"
			},
			{
				"value": "extra-small",
				"label": "Extra Small"
			}
		]
	},
	"security-padding": {
		"label": "Security padding",
		"type": "dropdown",
		"options": [
			{ 
				"value": "big",
				"label": "Big"
			},
			{
				"value": "normal",
				"label": "Normal"
			},
			{
				"value": "small",
				"label": "Small"
			}
		]
	},
	"space-before": {
		"label": "Space before",
		"type": "dropdown",
		"options": [
			{ 
				"value": "big",
				"label": "Big"
			},
			{
				"value": "normal",
				"label": "Normal"
			},
			{
				"value": "small",
				"label": "Small"
			}
		]
	},
	"space-after": {
		"label": "Space after",
		"type": "dropdown",
		"options": [
			{ 
				"value": "big",
				"label": "Big"
			},
			{
				"value": "normal",
				"label": "Normal"
			},
			{
				"value": "small",
				"label": "Small"
			}
		]
	},
	"alignment": {
		"label": "Alignment",
		"type": "dropdown",
		"options": [
			{
				"value": "left",
				"label": "Left"
			},
			{
				"value": "center",
				"label": "Center"
			},
			{
				"value": "right",
				"label": "Right"
			}
		]
	},
	"title-style": {
		"label": "Title style",
		"type": "dropdown",
		"options": [
			{ 
				"value": "extra-big",
				"label": "Extra Big"
			},
			{ 
				"value": "big",
				"label": "Big"
			},
			{
				"value": "normal",
				"label": "Normal"
			},
			{
				"value": "small",
				"label": "Small"
			},
			{
				"value": "extra-small",
				"label": "Extra Small"
			}
		]
	},
	"text-style": {
		"label": "Text style",
		"type": "dropdown",
		"options": [
			{ 
				"value": "big",
				"label": "Big"
			},
			{
				"value": "normal",
				"label": "Normal"
			},
			{
				"value": "small",
				"label": "Small"
			}
		]
	},
	"text-alignment": {
		"label": "Text alignment",
		"type": "dropdown",
		"options": [
			{
				"value": "left",
				"label": "Left"
			},
			{
				"value": "center",
				"label": "Center"
			},
			{
				"value": "right",
				"label": "Right"
			}
		]
	},
	"column-count": {
		"label": "Column count",
		"type": "dropdown",
		"options": [
			{ 
				"value": "2",
				"label": "2"
			},
			{
				"value": "3",
				"label": "3"
			},
			{
				"value": "4",
				"label": "4"
			},
			{
				"value": "5",
				"label": "5"
			},
			{
				"value": "6",
				"label": "6"
			}
		]
	},
	"column-span": {
		"label": "Column span",
		"type": "range",
		"value": 1,
		"unit": "col",
		"range": {
			"min": 1,
			"max": 6
		}
	},
	"vertical-gutter": {
		"label": "Vertical Gutter",
		"type": "dropdown",
		"options": [
			{ 
				"value": "big",
				"label": "Big"
			},
			{
				"value": "normal",
				"label": "Normal"
			},
			{
				"value": "small",
				"label": "Small"
			}
		]
	},
	"horizontal-gutter": {
		"label": "Horizontal Gutter",
		"type": "dropdown",
		"options": [
			{ 
				"value": "big",
				"label": "Big"
			},
			{
				"value": "normal",
				"label": "Normal"
			},
			{
				"value": "small",
				"label": "Small"
			}
		]
	}
};

export default MODULE_OPTIONS;