const Sequelize=require('sequelize')

const sequelize= new Sequelize('expense-tracker','root','0897454',{
    dialect:'mysql',
    host:'localhost'
})



module.exports=sequelize;



