class PopUp {
	constructor(container, button, element = null){
		this.container = document.getElementById(container)
		this.button = document.getElementById(button)
		this.element = document.getElementById(element)
		this.closeButton = this.container.querySelector('button')

		this.open()
	}

	open(){
		this.button.addEventListener('click', () =>{
			this.container.classList.add('open');
			this.button.classList.add('hidden')
			if(this.element){
				this.element.classList.add('open')
			}
			this.close();
		});
	}

	close(){
		this.closeButton.addEventListener('click', () =>{
			this.container.classList.remove('open');
			this.button.classList.remove('hidden')
			if(this.element){
				this.element.classList.remove('open')
			}
		});
		
	}
}

new PopUp('popup', 'open-popup', 'popup-container')
new PopUp('menu','burger-button')

const deactiveReload = (array) =>{
	array.forEach(item => item.addEventListener('click',(e)=>{
		e.preventDefault();
	}))
}
const linksArray = Array.from(document.querySelectorAll('a'));
const buttonsArray = Array.from(document.querySelectorAll('button'));
deactiveReload(linksArray);
deactiveReload(buttonsArray);


