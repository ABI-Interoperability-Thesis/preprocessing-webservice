const preprocessor = require('../utils/model-preprocessor')

const PreprocessRequest = async (req, res) => {
    const model = req.params.model
    const pred_obj = req.body.pred_obj

    console.log('Received obj')
    console.log(req.body)

    const preprocessed_obj = await preprocessor[model](pred_obj)

    return res.send({
        proc_obj: preprocessed_obj
    })
}

const GetAllPreprocessors = (req, res) => {
    //Test comment
    const all_preprocessors = ['hospitalization_pred']
    return res.send(all_preprocessors)
}

const NewRoute = (req, res) => {
    return res.send('This is a new route')
}

module.exports = {
    PreprocessRequest: PreprocessRequest,
    GetAllPreprocessors: GetAllPreprocessors,
    NewRoute: NewRoute
}