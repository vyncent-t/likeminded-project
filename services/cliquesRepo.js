const cliquesModel = require('../models/cliques');
const planModel = require('../models/plans');

const cliqueRepos = class CliqueRepo {
    all(){
        return cliquesModel.findAll({
            attributes: ['clique_id', 'clique_name'],
            include: [{model: planModel, attributes: ['plan_name', 'plan_desc']}]
        });
    }
}

module.exports = new cliqueRepos();