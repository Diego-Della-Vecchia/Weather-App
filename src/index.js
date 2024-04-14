import './style.css';
import './index.html';
import data from './api';
import {page,update} from './page';

data.get('erlinsbach').then((response)=>response.json())
.then((response) =>{
    data.response = response;
    update.page(data.unit, response);
})

console.log(page.metric)

page.imperial.addEventListener('click', ()=>{
    data.unit = 'imperial';
    update.page(data.unit, data.response);
    page.metric.classList.toggle('active');
    page.imperial.classList.toggle('active');

})

page.metric.addEventListener('click', ()=>{
    data.unit = 'metric';
    update.page(data.unit, data.response);
    page.imperial.classList.toggle('active');
    page.metric.classList.toggle('active');
    
})