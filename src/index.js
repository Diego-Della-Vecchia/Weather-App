import './style.css';
import './index.html';
import data from './api';
import {page, update} from './page';

data.get('erlinsbach').then((response)=>response.json())
.then((response) =>{
    update.page('metric', response);
})