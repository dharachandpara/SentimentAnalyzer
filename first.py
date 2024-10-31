import tkinter as tk
from tkinter import messagebox

# Create the main window
root = tk.Tk()
root.title("Gramalytics Welcome Page")
root.geometry("300x400")
root.configure(bg="#f2f2f2")


# Logo Section
logo_frame = tk.Frame(root, bg="#f2f2f2")
logo_frame.pack(pady=20)

logo_label = tk.Label(logo_frame, text="Logo", font=("Arial", 24), 
                      width=10, height=5, relief="solid", bg="#fff")
logo_label.pack()

# Function for sign-in button
def sign_in():
    username = username_entry.get()
    password = password_entry.get()
    if username == "admin" and password == "1234":  # Example credentials
        messagebox.showinfo("Login Successful", "Welcome to Gramalytics!")
    else:
        messagebox.showwarning("Login Failed", "Incorrect Username or Password")

# Function for create account button
def create_account():
    messagebox.showinfo("Create Account", "Redirecting to Create Account Page...")

# Function for forgot password button
def forgot_password():
    messagebox.showinfo("Forgot Password", "Redirecting to Password Recovery Page...")

# Username Entry
username_entry = tk.Entry(root, width=25, font=("Arial", 14))
username_entry.insert(0, "Username")
username_entry.pack(pady=10)

# Password Entry
password_entry = tk.Entry(root, width=25, font=("Arial", 14), show="*")
password_entry.insert(0, "Password")
password_entry.pack(pady=10)

# Sign In Button
sign_in_button = tk.Button(root, text="Sign In", width=20, bg="#4CAF50", 
                           fg="white", font=("Arial", 14), command=sign_in)
sign_in_button.pack(pady=10)

# Forgot Password Link
forgot_password_link = tk.Button(root, text="Forgot Password?", 
                                 font=("Arial", 12), bg="#f2f2f2", 
                                 fg="#4CAF50", bd=0, command=forgot_password)
forgot_password_link.pack(pady=5)

# Create Account Button
create_account_button = tk.Button(root, text="Create Account", width=20, 
                                  bg="#008CBA", fg="white", 
                                  font=("Arial", 14), command=create_account)
create_account_button.pack(pady=10)

# Run the application
root.mainloop()

