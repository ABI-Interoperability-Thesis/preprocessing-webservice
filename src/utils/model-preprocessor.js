const { MatchDB } = require('./mysql-ws')
const {calculateAge, calculateSecondsDays} = require('./funcs')

// Preprocessing function for the hospitalization model
const hospitalization_pred = async (pred_obj) => {
    const model_name = 'hospitalization_pred'

    const urg_episodio = parseInt(pred_obj['urg_episodio'])
    const hora_admissao = parseInt(pred_obj['hora_admissao'])
    const los = calculateSecondsDays(parseInt(pred_obj['los']))
    const idade = calculateAge(pred_obj['idade'])
    const afluencia = parseInt(pred_obj['afluencia'])

    const cod_via_verde = await MatchDB('cod_via_verde', pred_obj['cod_via_verde'], model_name)
    const cod_causa = await MatchDB('cod_causa', pred_obj['cod_causa'], model_name)
    const cod_concelho = await MatchDB('cod_concelho', pred_obj['cod_concelho'], model_name)
    const cod_prioridade = await MatchDB('cod_prioridade', pred_obj['cod_prioridade'], model_name)
    const cod_proveniencia = await MatchDB('cod_proveniencia', pred_obj['cod_proveniencia'], model_name)
    const sexo = await MatchDB('sexo', pred_obj['sexo'], model_name)

    return {
        urg_episodio,
        hora_admissao,
        cod_via_verde,
        cod_proveniencia,
        cod_causa,
        cod_concelho,
        cod_prioridade,
        idade,
        sexo,
        los,
        afluencia
    }
}

module.exports = {
    hospitalization_pred: hospitalization_pred,
}