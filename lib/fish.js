var swim = function() {
  console.log("swooosh");
};

function mouthbreath() {
  console.log("I can't mouth breath");
}

var floparound = function() {
  console.log("flopped");
}

var name = "Bob"

exports.name = name;
exports.swim = swim;
exports.mouthbreath = mouthbreath;
exports.floparound = floparound;