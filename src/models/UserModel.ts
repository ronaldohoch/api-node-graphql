import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";

export interface UserAttributes{
    userId?:number;
    userName?:string;
    userEmail?:string;
    userPassword?:string;
    userLastLogin?:string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes{
    isPassword(encodedPassword: string, passowrd: string): boolean;
};

export interface UserModel extends BaseModelInterface, Sequelize.Model<UserInstance, UserAttributes>{}

export default(sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes): UserModel =>{
    const User: UserModel = 
        sequelize.define('User', {
            userId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            userName:{
                type:DataTypes.STRING(45),
                allowNull:false
            },
            userEmail:{
                type:DataTypes.STRING(100),
                allowNull:false,
                unique:true
            },
            userPassword:{
                type:DataTypes.STRING(100),
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            userLastLogin:{
                type:DataTypes.DATE,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
        });
    return User;
}