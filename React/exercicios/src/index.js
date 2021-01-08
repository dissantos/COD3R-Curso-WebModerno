import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(<div>
    <Pai nome= 'Pedro' sobrenome = "Santos">
        <Filho nome = "Ana" sobrenome = "Santos"></Filho>
        <Filho nome = "Paulo" sobrenome = "Santos"></Filho>
    </Pai>
</div>
,document.getElementById('root'))