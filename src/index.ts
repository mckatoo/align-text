class Align {
  public centralized(text: string, delimiter:string, lineSize: number): string {
    const initText = lineSize / 2 - text.length / 2 - 1
    const endText = initText + text.length + 1
    let cursorTextPosition = 0
    let alignedText = ''

    for (let x = 0; x < lineSize; x++) {
      if (x > initText && x < endText) {
        alignedText += text[cursorTextPosition]
        cursorTextPosition++
      } else {
        alignedText += delimiter
      }
    }

    return alignedText
  }

  public rightAligned(text: string, delimiter:string, lineSize: number): string {
    const initText = lineSize - text.length - 1
    const endText = initText + text.length + 1
    let cursorTextPosition = 0
    let alignedText = ''

    for (let x = 0; x < lineSize; x++) {
      if (x > initText && x < endText) {
        alignedText += text[cursorTextPosition]
        cursorTextPosition++
      } else {
        alignedText += delimiter
      }
    }

    return alignedText
  }

  public leftAligned(text: string, delimiter:string, lineSize: number): string {
    let cursorTextPosition = 0
    let alignedText = ''

    for (let x = 0; x < lineSize; x++) {
      if (x >= 0 && x < text.length) {
        alignedText += text[cursorTextPosition]
        cursorTextPosition++
      } else {
        alignedText += delimiter
      }
    }

    return alignedText
  }

  public leftRightAligned(
    textLeft: string,
    textRight: string,
    delimiter: string,
    lineSize: number
  ): string {
    let cursorTextLeftPosition = 0
    const initTextRight = lineSize - textRight.length - 1
    const endTextRight = initTextRight + textRight.length + 1
    let cursorTextRightPosition = 0
    let alignedText = ''

    if (lineSize < textRight.length + textLeft.length) return Error.toString()

    for (let x = 0; x < lineSize; x++) {
      if (x >= 0 && x < textLeft.length) {
        alignedText += textLeft[cursorTextLeftPosition]
        cursorTextLeftPosition++
      } else if (x > initTextRight && x < endTextRight) {
        alignedText += textRight[cursorTextRightPosition]
        cursorTextRightPosition++
      } else {
        alignedText += delimiter
      }
    }

    return alignedText
  }
}

module.exports = new Align()
