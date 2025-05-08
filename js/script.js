const CONTAINER = document.querySelector("#container")
const MESSAGES = document.querySelector("#messages")
const BUTTON = document.querySelector("#button")
const FORM = document.querySelector("#form")
const INPUT = document.querySelector("#textUserArea")
const TEMPLATE = document.querySelector("#template")

FORM.addEventListener("submit", Event => {
  Event.preventDefault()
  const msgText = INPUT.value.trim()

  if (msgText !== "") {
    INPUT.value = ""
  }
})

function addMessage(text, sender) {
  const clonedTemplate = TEMPLATE.content.cloneNode(true)
  const newMessage = clonedTemplate.querySelector(".template__msg")

  const who = newMessage.querySelector("span")
  const textParagraphs = newMessage.querySelector("p")

  textParagraphs.textContent = text
  who.textContent = sender
  newMessage.classList.add(sender)
}
