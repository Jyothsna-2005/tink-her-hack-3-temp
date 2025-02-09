document.addEventListener("DOMContentLoaded", () => {
    const travelForm = document.getElementById("travel-form")
    const signinForm = document.getElementById("signin-form")
    const signupForm = document.getElementById("signup-form")
  
    if (travelForm) {
      travelForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const formData = new FormData(travelForm)
        const data = Object.fromEntries(formData.entries())
        data.interests = formData.getAll("interests")
  
        try {
          const response = await fetch("http://localhost:3000/api/travel", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
  
          if (response.ok) {
            const result = await response.json()
            alert(`Destination found: ${result.destination}`)
          } else {
            alert("Error finding destination")
          }
        } catch (error) {
          console.error("Error:", error)
          alert("Error submitting form")
        }
      })
    }
  
    if (signinForm) {
      signinForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const formData = new FormData(signinForm)
        const data = Object.fromEntries(formData.entries())
  
        try {
          const response = await fetch("http://localhost:3000/api/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
  
          if (response.ok) {
            alert("Signed in successfully")
            window.location.href = "index.html"
          } else {
            alert("Error signing in")
          }
        } catch (error) {
          console.error("Error:", error)
          alert("Error submitting form")
        }
      })
    }
  
    if (signupForm) {
      signupForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const formData = new FormData(signupForm)
        const data = Object.fromEntries(formData.entries())
  
        if (data.password !== data["confirm-password"]) {
          alert("Passwords do not match")
          return
        }
  
        try {
          const response = await fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
  
          if (response.ok) {
            alert("Signed up successfully")
            window.location.href = "signin.html"
          } else {
            alert("Error signing up")
          }
        } catch (error) {
          console.error("Error:", error)
          alert("Error submitting form")
        }
      })
    }
  })
  
  