var orpheusExtension = ({ context }) => {
  var runTimeResult = Date.now() - context.startTime;
  return {
    runTime: runTimeResult
  }
}

module.exports = orpheusExtension;