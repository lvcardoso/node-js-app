var config = require('./db');
const sql = require('mssql');

async function getCarros(){
    try{
        let pool = await sql.connect(config);
        let lojas = await pool.request().query("SELECT * from Carros");
        return lojas.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getCarro(carroId){
    try{
        let pool = await sql.connect(config);
        let loja = await pool.request()
        .input('input_parameter', sql.Int, carroId)
        .query("SELECT * from [dbo].[Carros] where Id = @input_parameter");
        return loja.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function delCarro(carroId){
    try{
        let pool = await sql.connect(config);
        let loja = await pool.request()
        .input('input_parameter', sql.Int, carroId)
        .query("DELETE FROM [dbo].[Carros] WHERE ID = @input_parameter");
        return loja.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function updtCarro(carro){
    try{
        let pool = await sql.connect(config);
        let loja = await pool.request()
        .input('input_parameter', sql.Int, carro.Id)
        .query(`UPDATE [dbo].[Carros]
                SET 
                [Fabricante] = '${carro.Fabricante}'
                ,[Ano] = '${carro.Ano}'
                ,[Marca] = '${carro.Marca}'
                ,[Cidade] = '${carro.Cidade}'
                ,[Imagem] = '${carro.Imagem}'
                WHERE ID = @input_parameter`);
        return loja.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function addCarro(carro){
    try{
        let pool = await sql.connect(config);
        let loja = await pool.request()
        .query(`INSERT INTO [dbo].[Carros]
            (
                [Id]
                ,[Fabricante]
                ,[Ano]
                ,[Marca]
                ,[Cidade]
                ,[Imagem]
            )VALUES (
                '${carro.Id}',
                '${carro.Fabricante}',
                '${carro.Ano}',
                '${carro.Marca}',
                '${carro.Cidade}',
                '${carro.Imagem}'
            )
        `);
        return loja.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCarros : getCarros,
    getCarro : getCarro,
    addCarro : addCarro,
    delCarro: delCarro,
    updtCarro: updtCarro
}
