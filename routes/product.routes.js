const express = require('express')
 
const router = express.Router()
const productController = require('./../controller/product.controller')

router.route('/add-product').post(productController.addingProduct)
router.route('/all-products').get(productController.sendingAllvariety)
router.route('/update-products').post(productController.updatingProductPrice)
router.route('/bulk-value').get(productController.makingBulkOrderValues)
router.route('/all-placed-orders').get(productController.sendingAllPlacedOrders)
router.route('/mark-as-packed').post(productController.markingProductPackedAsDone)
router.route('/mark-as-delivered').post(productController.markingProductDeliveredAsDone)
router.route('/cod-collect').post(productController.markingProductCODAsDone)

module.exports = router 