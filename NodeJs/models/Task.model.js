
module.exports=(sequelize,Sequelize)=>{

    const Task=sequelize.define("task",{
        
        taskId:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        taskName:{
            type:Sequelize.STRING,
            allowNull: false
        },
        priority:{
            type:Sequelize.STRING,
            allowNull: false
        },
        dueDate:{
            type:Sequelize.DATE,
            allowNull: false
        }

    })

   
    return Task
}




