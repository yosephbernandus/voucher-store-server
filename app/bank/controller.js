const Bank = require('./model');

module.exports = {
    index: async (req, res) => {
        try {
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');

            const alert = { message: alertMessage, status: alertStatus };
            const bank = await Bank.find();
            res.render('admin/bank/view_bank', {
                bank,
                alert
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/bank');
        }
    },
    viewCreate: async (req, res) => {
        try {
            res.render('admin/bank/create')
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/bank');
        }
    },

    actionCreate: async (req, res) => {
        try {
            const { name, nameBank, noRekening } = req.body;
            let bank = await Bank({ name, nameBank, noRekening });
            await bank.save();

            req.flash('alertMessage', 'Success Add Bank');
            req.flash('alertStatus', 'success');
            res.redirect('/bank')
        } catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/bank');
        }
    },

    // viewEdit: async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const nominal = await Nominal.findById({_id: id});
    //         res.render('admin/nominal/edit', {
    //             nominal
    //         })
    //     } catch (err) {
    //         req.flash('alertMessage', `${err.message}`);
    //         req.flash('alertStatus', 'danger');
    //         res.redirect('/nominal');
    //     }
    // },

    // actionEdit: async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const { coinName, coinQuantity, price } = req.body;
    //         await Nominal.findOneAndUpdate({_id: id}, {coinName, coinQuantity, price});

    //         req.flash('alertMessage', 'Success Edit Nominal');
    //         req.flash('alertStatus', 'success');
    //         res.redirect('/nominal')
    //     } catch (err) {
    //         req.flash('alertMessage', `${err.message}`);
    //         req.flash('alertStatus', 'danger');
    //         res.redirect('/nominal');
    //     }
    // },

    // actionDelete: async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         await Nominal.findOneAndRemove({_id: id});

    //         req.flash('alertMessage', 'Success hapus Nominal');
    //         req.flash('alertStatus', 'success');

    //         res.redirect('/nominal')
    //     } catch (err) {
    //         req.flash('alertMessage', `${err.message}`);
    //         req.flash('alertStatus', 'danger');
    //         res.redirect('/nominal');
    //     }
    // }
}
