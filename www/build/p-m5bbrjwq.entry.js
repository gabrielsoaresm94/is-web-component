import{r as t,h as s,H as i}from"./p-16aacc87.js";const e=class{constructor(s){t(this,s),this.rounded=!1}render(){return s(i,{class:{[this.color]:!0,rounded:this.rounded,hidden:!this.text}},s("span",null,this.text))}static get style(){return".sc-is-badge-h{-webkit-font-smoothing:antialiased;padding:var(--padding-top,1px) var(--padding-end,8px) var(--padding-bottom,3px) var(--padding-start,8px);display:inline-block;min-width:10px;color:var(--color,#fff);text-align:center;white-space:nowrap;contain:content;vertical-align:baseline;background-color:var(--background-color,#327bb7);border-color:transparent}.sc-is-badge-h span.sc-is-badge{font-family:var(--font-family,\"Helvetica Neue\",Helvetica,Arial,sans-serif);font-size:var(--font-size,13px);font-weight:var(--font-weight,normal);line-height:1}.primary.sc-is-badge-h{color:#fff;background-color:#327bb7}.secondary.sc-is-badge-h{color:#fff;background-color:#ff7d09}.success.sc-is-badge-h{color:#fff;background-color:#00c092}.warning.sc-is-badge-h{color:#fff;background-color:#e8d700}.error.sc-is-badge-h{color:#fff;background-color:#d0021b}.light.sc-is-badge-h{color:#000;background-color:#e5e5e5}.info.sc-is-badge-h{color:#000;background-color:#b9b9b9}.dark.sc-is-badge-h{color:#fff;background-color:#5d5d5d}.white.sc-is-badge-h{color:#000;background-color:#fff}.black.sc-is-badge-h{color:#fff;background-color:#000}.rounded.sc-is-badge-h{border-radius:var(--border-radius,4px)}.hidden.sc-is-badge-h{display:none}"}},l=class{constructor(s){t(this,s),this.isExpanded=!1,this.keyword="",this.disabled=!1,this.placeholder="Pick some",this.items=[],this.selected=[],this.filteredItems=this.items,this.onClick=()=>{this.toggle(!0),setTimeout(()=>{this.textInput.focus()},200)},this.toggle=t=>{this.isExpanded=t},this.isSelected=t=>this.selected.some(s=>s.id===t.id),this.updateItems=t=>{this.selected=this.isSelected(t)?this.selected.filter(s=>s.id!==t.id):[...this.selected,t]},this.onFilteredItems=t=>{this.keyword=t.target.value,this.filteredItems=this.items.filter(t=>t.name.toLowerCase().includes(this.keyword.toLowerCase()))}}getSelected(){return Promise.resolve(this.selected)}componentDidLoad(){document.addEventListener("click",t=>{this.multiselect.contains(t.target)||(this.isExpanded=!1)})}render(){return s(i,{class:"multiselect__wrapper",ref:t=>this.multiselect=t},s("div",{class:{multiselect:!0,active:this.isExpanded}},s("div",{class:"multiselect__click-area",onClick:this.onClick,style:{zIndex:this.isExpanded?"-1":"0"}},s("span",{class:"btnToggle",onClick:()=>this.toggle(!1)})),this.isExpanded?s("div",{class:"multiselect__input"},s("input",{value:this.keyword,onInput:t=>this.onFilteredItems(t),ref:t=>this.textInput=t,placeholder:this.placeholder}),s("span",{class:"btnToggle",onClick:()=>this.toggle(!1)})):s("div",{class:"multiselect__placeholder"},this.placeholder)),this.isExpanded&&s("div",{class:"multiselect__content"},s("ul",{class:"multiselect__content--list"},this.filteredItems.length>0?this.filteredItems.map((t,i)=>s("li",{class:{"multiselect__content--item":!0,"multiselect__content--selected":this.isSelected(t)},key:i,onClick:()=>this.updateItems(t)},t.name)):s("li",{class:"not-found"},"Not found"))))}static get style(){return"\@charset \"UTF-8\";.multiselect.sc-is-multiselect{position:relative;min-height:35px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px;background-image:linear-gradient(45deg,transparent 50%,grey 0),linear-gradient(135deg,grey 50%,transparent 0);background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px);outline:0;background-size:5px 5px,5px 5px,1px 1.5em;background-repeat:no-repeat;color:#35495e;font-family:Lato,Helvetica,sans-serif}.multiselect.active.sc-is-multiselect{background-image:linear-gradient(45deg,grey 50%,transparent 0),linear-gradient(135deg,transparent 50%,grey 0);background-position:calc(100% - 15px) 1em,calc(100% - 20px) 1em}.multiselect__click-area.sc-is-multiselect{background-color:transparent;position:absolute;width:100%;height:100%;top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.multiselect__placeholder.sc-is-multiselect{padding-left:15px}.btnToggle.sc-is-multiselect{width:40px;cursor:pointer}.multiselect__input.sc-is-multiselect{padding-left:10px;width:100%;height:100%;display:-ms-flexbox;display:flex}.multiselect__input.sc-is-multiselect input.sc-is-multiselect{width:100%;height:100%;display:inline-block;min-height:35px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:top;outline:none;color:#35495e;font-family:Helvetica,sans-serif;font-size:14px}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-webkit-input-placeholder{opacity:1;color:#35495e;font-family:Helvetica,sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-moz-placeholder{opacity:1;color:#35495e;font-family:Helvetica,sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect:-ms-input-placeholder{opacity:1}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-ms-input-placeholder{opacity:1}.multiselect__input.sc-is-multiselect .sc-is-multiselect::placeholder{opacity:1;color:#35495e;font-family:Helvetica,sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect:-ms-input-placeholder{color:#35495e;font-family:Helvetica,sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-ms-input-placeholder{color:#35495e;font-family:Helvetica,sans-serif}.multiselect__content.sc-is-multiselect{position:absolute;display:block;background:#fff;width:calc(100% - 18px);max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:3;-webkit-overflow-scrolling:touch}.multiselect__content--list.sc-is-multiselect{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect__content--item.sc-is-multiselect{padding:12px;line-height:16px;text-decoration:none;text-transform:none;position:relative;cursor:pointer;white-space:nowrap;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.multiselect__content--item.sc-is-multiselect:hover{background:#00c092;color:#fff;outline:none}.multiselect__content--item.sc-is-multiselect:hover:after{content:\"Click to Select\";font-size:12px}.multiselect__content--selected.sc-is-multiselect{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;background:#e5e5e5;color:#000}.multiselect__content--selected.sc-is-multiselect:after{content:\"✓\";color:#327bb7;font-weight:700}.multiselect__content--selected.sc-is-multiselect:hover{background:#d0021b;color:#fff;outline:none}.multiselect__content--selected.sc-is-multiselect:hover:after{content:\"Click to Remove\";font-size:12px;color:#fff;font-weight:400}.multiselect__content--remove.sc-is-multiselect{background:#d0021b;color:#fff;outline:none}.not-found.sc-is-multiselect{height:35px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:12px;font-family:Helvetica,sans-serif}"}};export{e as is_badge,l as is_multiselect};