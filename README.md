## Tutorial
[Video](https://www.youtube.com/watch?v=piG91X4sV2U&ab_channel=TrueCoder)
[Image Website](https://undraw.co)
## Step by Step

# Step 1:

Create sign-in form
+ Input field
    ```
        <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" />
        </div>
    ```
    Set background color for 'input-filed' then remove background, border, and outline of input text
    ```
        .input-field {
            max-width: 380px;
            width: 100%;
            background-color: #f0f0f0;
            margin: 10px 0;
            height: 55px;
            border-radius: 55px;
            display: grid;
            grid-template-columns: 15% 85%;
            padding: 0 0.4rem;
            position: relative;
        }

        .input-field i {
            text-align: center;
            line-height: 55px;
            color: #acacac;
            transition: 0.5s;
            font-size: 1.1rem;
        }

        .input-field input {
            background: none;
            outline: none;
            border: none;
            line-height: 1;
            font-weight: 600;
            font-size: 1.1rem;
            color: #333;
        }

        .input-field input::placeholder {
            color: #aaa;
            font-weight: 500;
        }
        ```
+ Button: set width, height by padding
    Basic animation:
    ```
        .btn:hover {
            background-color: #4d84e2;
            transform: scale(1.1);
        }
        .btn:active{
            transform: scale(0.9);
        }
    ```
+ Social Icon: 
    html: <div><a><i class="fab fa-facebook-f"></i></a></div>
    css: User border to make circle 

# Step 2

Copy sign-in form to create sign-up.

# Step 3:

Move sign up and sign in form to the right and use grid to make it display overlap

wrap 2 form and display in 1 column
```
.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}
```

set start and end position for form
```
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
```

Hide one of them by opacity
```
form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}
```

# Step 4:

Make background blue color:
- Use border radius to make a curve
- Use transform to set position for background
- overflow hidden
```
    .container {
        position: relative;
        width: 100%;
        background-color: #fff;
        min-height: 100vh;
        overflow: hidden;
    }

    .container:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
    }
```

# Step 5

Create pannel to show some text and button to change from sign-in to sign-up form and reverse

- Wrap 2 panel with grid layout, then display flex items center, position absolute to display over form

- Prevent click on form with pointer: none when panel over form

- Move other pannel with transform

# Step 6: Animate

Using script to add / remove "sign-up-mode", and css with this class.

Move form, contain and pannel after click on button tranfer

Need to set pointer to make sure we can click on form, 




