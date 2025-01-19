const saasButton = document.getElementById("saasButton");
const selfHostedButton = document.getElementById("selfHostedButton");
const saasOptions = document.getElementById("saasOptions");
const selfHostedOptions = document.getElementById("selfHostedOptions");

saasButton.addEventListener("click", () => {
  saasOptions.classList.remove("hidden");
  selfHostedOptions.classList.add("hidden");
  saasButton.classList.add("bg-blue-500", "text-white");
  saasButton.classList.remove("bg-gray-100", "text-gray-600");
  selfHostedButton.classList.add("bg-gray-100", "text-gray-600");
  selfHostedButton.classList.remove("bg-blue-500", "text-white");
});

selfHostedButton.addEventListener("click", () => {
  selfHostedOptions.classList.remove("hidden");
  saasOptions.classList.add("hidden");
  selfHostedButton.classList.add("bg-blue-500", "text-white");
  selfHostedButton.classList.remove("bg-gray-100", "text-gray-600");
  saasButton.classList.add("bg-gray-100", "text-gray-600");
  saasButton.classList.remove("bg-blue-500", "text-white");
});