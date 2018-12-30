'use strict';

var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];
var container = document.getElementById('container');
for( var i = 0 ; i < data.length; i++) {
	var divClass = data[i].categories;
	var headerClass;
	if(divClass.indexOf('special-header') !== -1) {
		headerClass = divClass.splice(divClass.indexOf('special-header') , 1);
	} else {
		headerClass = '';
	}
	divClass = divClass.join(' ');
	var content = data[i].content;
	var header = '<header' + (headerClass === '' ? '>' : " class='" + headerClass + "'>") + data[i].title + '</header>';
	var id = data[i].id;
	var div = '<div ' + "id='" + id + (divClass === '' ? "'>" : "' class='" + divClass + "'>") + header + content + '</div>';
	container.insertAdjacentHTML('beforeend', div);
}
