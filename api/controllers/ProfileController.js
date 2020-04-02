/**
 * ProfileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	get:async function(req,res){
		let {userId} = req.session;
		return res.send(userId);
	}
};

