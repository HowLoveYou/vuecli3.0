import {
    _import
} from '../utils/common' //模块加载方法

const sass = [{
        path: "if",
        name: "if",
        component: _import('sass/components/if')
    },
    {
        path: 'for',
        name: 'for',
        component: _import('sass/components/for')
    },
    {
        path: "while",
        name: "while",
        component: _import('sass/components/while')
    },
    {
        path: "each",
        name: "each",
        component: _import('sass/components/each')
    },
    //函数
    {
        path: "string",
        name: "string",
        component: _import('sass/fun/string')
    },
    {
        path: "numberfun",
        name: "numberfun",
        component: _import('sass/fun/numberFun'),
        children: [{
                path: "percentage",
                name: 'percentage',
                component: _import('sass/fun/percentage')
            },
            {
                path: "round",
                name: 'round',
                component: _import('sass/fun/round')
            },
            {
                path: "ceil",
                name: 'ceil',
                component: _import('sass/fun/ceil')
            },
            {
                path: "floor",
                name: 'floor',
                component: _import('sass/fun/floor')
            },
            {
                path: "abs",
                name: 'abs',
                component: _import('sass/fun/abs')
            },
            {
                path: "min",
                name: 'min',
                component: _import('sass/fun/min')
            },
            {
                path: "random",
                name: 'random',
                component: _import('sass/fun/random')
            }
        ]
    }
]
export default sass