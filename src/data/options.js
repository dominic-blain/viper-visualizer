const OPTIONS = {
	"width": {
		"name": "width",
		"label": "Width",
		"type": "dropdown",
		"choices": [
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
		"name": "security-padding",
		"label": "Security padding",
		"type": "dropdown",
		"choices": [
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
		"name": "space-before",
		"label": "Space before",
		"type": "dropdown",
		"choices": [
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
		"name": "space-after",
		"label": "Space after",
		"type": "dropdown",
		"choices": [
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
		"name": "alignment",
		"label": "Alignment",
		"type": "dropdown",
		"choices": [
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
		"name": "title-style",
		"label": "Title style",
		"type": "dropdown",
		"choices": [
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
		"name": "text-style",
		"label": "Text style",
		"type": "dropdown",
		"choices": [
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
		"name": "text-alignment",
		"label": "Text alignment",
		"type": "dropdown",
		"choices": [
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
		"name": "column-count",
		"label": "Column count",
		"type": "dropdown",
		"choices": [
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
		"name": "column-span",
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
		"name": "vertical-gutter",
		"label": "Vertical Gutter",
		"type": "dropdown",
		"choices": [
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
		"name": "horizontal-gutter",
		"label": "Horizontal Gutter",
		"type": "dropdown",
		"choices": [
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

export default OPTIONS;