

const getHome = async (req, res) => {
    res.render('home', {statistic: {done: 8, all: 10}, progressWidth: 80,
                        rightColumn: [{title:"Task 1", completed:true},
                                        {title:"Task 2", completed:false},
                                        {title:"Task 3", date:"23/12/2024", time:"12:30", completed:true}
                                    ],
                        leftColumn: [{title:"Task 1", completed:true},
                                        {title:"Task 2", completed:false},
                                        {title:"Task 3", date:"23/12/2024", time:"12:30", completed:true}
                        ]
    });
}

export default getHome;