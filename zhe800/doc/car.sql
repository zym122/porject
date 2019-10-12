/*
Navicat MySQL Data Transfer

Source Server         : zym
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : car

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-10-12 17:19:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cars
-- ----------------------------
DROP TABLE IF EXISTS `cars`;
CREATE TABLE `cars` (
  `gurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gnum` int(11) NOT NULL,
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `stock` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cars
-- ----------------------------
INSERT INTO `cars` VALUES ('https://z12.tuanimg.com/imagev2/trade/600x600.8bcb644ed715b9ccc11e8b01e41b9ddd.380x380.jpg', '依思q2019夏新款百搭透气ins运动鞋女跑步鞋炫彩潮休闲学生系带女', '140', '1', '23', '201');
INSERT INTO `cars` VALUES ('https://z12.tuanimg.com/imagev2/trade/600x600.7081e46bf095b32f79f1a5009f6d8b46.380x380.jpg', '依思q2019冬季网面透气女鞋布里网红小白鞋潮百搭运动休闲鞋', '136', '1', '22', '201');
INSERT INTO `cars` VALUES ('https://z12.tuanimg.com/imagev2/trade/600x600.df731b200899754f3cf85d4fc0b91f9d.380x380.jpg', '依思q冬季新款韩版百搭花边绒布短靴简约铆钉粗跟女靴88186169', '139', '1', '21', '201');
INSERT INTO `cars` VALUES ('https://z12.tuanimg.com/imagev2/trade/600x600.d0404bfaad7dae39d90a7c6c20b50d5a.380x380.jpg', '依思q2019新款时尚休闲运动网面鞋复古透气高跟女鞋子18177015', '141', '1', '24', '201');
INSERT INTO `cars` VALUES ('https://z12.tuanimg.com/imagev2/trade/600x600.fb207805d63d421bfd890ada6eb243f9.380x380.jpg.webp', '依思q2019春新款韩版潮流撞色字母绑带圆头平底休闲女鞋18154033', '146', '1', '25', '201');
INSERT INTO `cars` VALUES ('https://z12.tuanimg.com/imagev2/trade/800x800.1c99c75e69389a5c6a854efeb8390f5b.380x380.jpg', '依思q秋新款优雅小巧尖头单鞋百搭粗跟高跟潮女鞋17170724', '142', '1', '26', '201');
SET FOREIGN_KEY_CHECKS=1;
