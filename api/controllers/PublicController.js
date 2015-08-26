/**
 * PublicController
 *
 * @description :: Server-side logic for managing publics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	"portfolio": function (req, res) {
    res.view({
      errors: req.flash('error')
    });
  },

	"webdevelopment": function (req, res) {
    res.view({
      errors: req.flash('error')
    });
  }
};
