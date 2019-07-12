// Redesign made by Jade 6/30/2019
class tabLink {
  constructor(tabElement) {
    //assigning this.tabElement to the tabElement Dom reference
    this.tabElement = tabElement;
    // console.log(tabElement)//testing
    // Getting the `data-tab values from this.tabElement and storing it below. Finding it first through console logging
    // console.log(tabElement.dataset.tab)
    this.tabData = this.tabElement.dataset.tab;

    // Finding out if a user clicked 'all' cards or a specific category by checking if the.tabData is equal to 'all'

    if(this.tabData === 'all') {
       // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card')
      // console.log('All is selected!')//Testing
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab=${this.tabData}]`);
    }

    //Mapping over the newly converted NodeList just created in our if statement above.
    //Convert eah this.cards element into a new instance of the tabCard class
    //Pass in a card object ot the tabCard class

    this.cards = Array.from(this.cards).map(card => new tabCard (card));

    // console.log(this.cards)
    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab());
    // console.log(this.tabData)

  }

  selectTab() {
    //Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');

    //Iterate through the NodeList removing the .active-tabs class from each element
    tabs.forEach(function(item) {
      item.classList.remove('active-tabs')
    })

    //Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function(card) {
      card.style.display = 'none'
    })
    //Add a class of ".active-tabs" to this.tabElement
    this.tabElement.classList.add('active-tabs');

    this.cards.forEach(card => card.selectCard());
    // console.log(this.cards)
  }
}

class tabCard {
  constructor(cardElement) {
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
    // console.log(this.cardElement)
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex';
    // console.log('Cards have flexed')
  }
}

let tabs = document.querySelectorAll('.tab')

tabs.forEach(tabElement => new tabLink(tabElement));
// console.log(tabs)

// Tabs Link Feature -Alexis

// class TabLink {
//     constructor(element) {
//       this.element = element;
//       this.data = element.dataset.tab;
//       this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`)
//       this.tabItem = new TabItem(this.itemElement);
//       this.element.addEventListener('click', () => { 
//         this.select()
//     });
//     }
  
//     select() {
//       const links = document.querySelectorAll('.tabs-link');
  
//       Array.from(links).forEach(item => 
//         item.classList.remove('tabs-link-selected'));
  
//       this.element.classList.add('tabs-link-selected');
      
//       this.tabItem.select();
//     }
//   }
  
//   class TabItem {
//     constructor(element) {
//       this.element = element;
//     }
  
//     select() {
//       const items = document.querySelectorAll('.tabs-item');
//       Array.from(items).forEach(item =>
//         item.classList.remove('tabs-item-selected')
//         );
//       this.element.classList.add('tabs-item-selected')
//     }
//   }
  
//   let links = document.querySelectorAll('.tabs-link')
  
//   links.forEach(link => {
//     return new TabLink(link);
//   });