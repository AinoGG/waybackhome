import { defineStore } from 'pinia'


interface Hero {
    name: string,
    stamina: number,
    strength: number,
    agility: number,
    luck: number,
    intelligence: number,
    regeneration: number,
    hunger: boolean,
    points: number,
    inventory: Object[]
    bug: Object[]
}

interface Inventory {
    name: string,
    type: 'clothes' | 'food' | 'armor' | 'weapon' | 'utility',
    grade: 'default' | 'green' | 'blue' | 'legend' | 'god',   
    stats: Object[] 
}

interface Stats  {
    name: 'stamina' | 'strength' | 'agility' | 'luck' | 'intelligence' | 'regeneration' | 'hunger' | 'points',
    value: number
}

export const useHeroStore = defineStore('hero', {
    state: (): Hero => {
        return {
            name: '',
            stamina: 5,
            strength: 5,
            agility: 5,
            regeneration: 1,
            hunger: false,
            luck: 5,
            intelligence: 5,
            points: 5,
            inventory: <Inventory[]> [
                {
                    name: 'Рубашка',
                    type: 'clothes',
                    grade: 'default',
                    stats: <Stats[]> [
                        {
                            name: 'stamina',
                            value: 1
                        },
                        {
                            name: 'strength',
                            value: 1
                        }
                    ]
                },
                {
                    name: 'Штаны',
                    type: 'clothes',
                    grade: 'default',
                    stats: <Stats[]> [
                        {
                            name: 'stamina',
                            value: 1
                        },
                        {
                            name: 'agility',
                            value: 1
                        }
                    ]
                },
                {
                    name: 'Ботинки',
                    type: 'clothes',
                    grade: 'default',
                    stats:<Stats[]> [
                        {
                            name: 'luck',
                            value: 1
                        },
                        {
                            name: 'agility',
                            value: 1
                        }
                    ]
                },

            ], 
            bug: <Inventory[]>[
                {
                    name: 'Пирожок',                    
                    type: 'food',
                    grade: 'default',
                    stats: <Stats[]> [
                        {
                            name: 'regeneration',
                            value: 1
                        },
                        {
                            name: 'hunger',
                            value: 1
                        }
                    ]
                },
                {
                    name: 'Фляга с водой',                    
                    type: 'food',
                    grade: 'default',
                    stats: <Stats[]> [
                        {
                            name: 'stamina',
                            value: 1
                        },
                        {
                            name: 'hunger',
                            value: 1
                        }
                    ]
                },
                {
                    name: 'Кухонный нож',                    
                    type: 'weapon',
                    grade: 'default',
                    stats: <Stats[]> [
                        {
                            name: 'strength',
                            value: 1
                        },
                        {
                            name: 'luck',
                            value: 1
                        }
                    ]
                },
            ]
        }
    },
})