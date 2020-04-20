import { useEffect, useState } from 'react'

const TypeText = ({ wordList }) => {
  const [text, setText] = useState(null)
  const [words] = useState(wordList)

  useEffect(() => {
    // the index of the word we are currently on
    let wordIndex = 0
    // the index of where we are in typing out that word
    let typingIndex = 0
    // the timer that controls when the next letter is rendered
    let timer

    const printLetter = () => {
      let foo = ''
      const wordLength = words[wordIndex].length
      const lettersTo =
        typingIndex > wordLength - 1
          ? wordLength * 2 - typingIndex
          : typingIndex
      for (let i = 0; i < lettersTo; i++) {
        foo += words[wordIndex][i]
      }
      typingIndex = typingIndex + 1
      setText(foo)
      nextLetter()
    }

    const nextLetter = () => {
      const wordLength = words[wordIndex].length
      if (typingIndex === wordLength * 2) {
        typingIndex = 0
        wordIndex = (wordIndex + 1) % words.length
        return nextLetter()
      }
      let wait
      // pause at the beginning and end of typing out a word
      if (typingIndex === 1 || typingIndex === words[wordIndex].length + 1) {
        wait = 900
      }
      // erase quickly
      else if (typingIndex > words[wordIndex].length) {
        wait = 50
      }
      // typing forward speed
      else {
        wait = 100
      }
      timer = setTimeout(printLetter, wait)
    }

    // kick-off process
    nextLetter()

    // cleanup will only run on unmount
    return function cleanup() {
      clearTimeout(timer)
    }
  }, [words])

  return text
}

export default TypeText
