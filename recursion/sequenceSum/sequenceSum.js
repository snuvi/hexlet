export default function sequenceSum (begin, end) {
  if (begin > end) {
    return NaN
  }

  if (begin === end) {
    return end
  }

  return begin + sequenceSum(begin + 1, end)
}

// module.exports = sequenceSum
