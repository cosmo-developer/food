class GallaryCard{
    constructor(parentNode){
      this.imgPath="https://dummyimage.com/606x366";
      this.subTitle="THE SUBTITLE";
      this.name="Shooting Stars"
      this.description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.";
      this.parentNode=parentNode
    }
    setImagePath(imgPath){
        this.imgPath=imgPath
    }
    setSubTitle(subTitle){
        this.subTitle=subTitle
    }
    setName(name){
        this.name=name
    }
    setDescription(description){
        this.description=description
    }
    __buildGallaryCard(){
        
    }
    renderMe(){

    }

}
class GallaryAlpha{
    constructor(parentNode){
        this.title="Master Cleanse Reliac Heirloom"
        this.quates="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom."
        this.cards=[]
        this.selfItem=null
        this.parentNode=parentNode
        this.__buildGallaryAlpha()
        this.renderEverything()
    }
    setTitle(title){
        this.title=title    
    }
    setQuates(quates){
        this.quates=quates
    }
    changeCardAt(index,card){
        this.cards[index]=card
    }
    addNewCard(card){
        this.cards.push(card)
    }
    removeFromEnd(){
        this.cards.pop()
    }
    removeCarAt(index){
        delete this.cards[index]
    }
    __updateGallary(){
        this.selfItem.children[0].children[0].children[0].innerHTML=this.title
        this.selfItem.children[0].children[0].children[1].innerHTML=this.quates
    }
    __buildGallaryAlpha(){
        let sectionElement=document.createElement("section")
        sectionElement.setAttribute("class","text-gray-700 body-font")
        sectionElement.appendChild(document.createElement("div"))
        sectionElement.children[0].setAttribute("class","container px-5 py-24 mx-auto")
        sectionElement.children[0].appendChild(document.createElement("div"))
        sectionElement.children[0].children[0].setAttribute("class","flex flex-col text-center w-full mb-20")
        sectionElement.children[0].children[0].appendChild(document.createElement("h1"))
        sectionElement.children[0].children[0].children[0].setAttribute("class","sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900")
        sectionElement.children[0].children[0].children[0].innerHTML=this.title
        sectionElement.children[0].children[0].appendChild(document.createElement("p"))
        sectionElement.children[0].children[0].children[1].setAttribute("class","lg:w-2/3 mx-auto leading-relaxed text-base")
        sectionElement.children[0].children[0].children[1].innerHTML=this.quates
        this.selfItem=sectionElement
    }
    renderEverything(updateMode=false){
        if (updateMode==false){
        this.parentNode.appendChild(this.selfItem)
        }else{
            this.__updateGallary()
        }
    }
}