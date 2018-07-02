### Development
- Run `parcel index.html --out-dir public -p 3000`

### Notes:
#### Header
- Links:
    - Logo -> Links to Drafthouse Homepage.
    - Join -> Links to Drafthouse Victory Page.
    - FAQ -> Links to Drafthouse About Us Page.
    - External Link -> Links to Drafthouse News Page.
I added the `srcset` to the Logo Link since the `2x` and `3x` pngs were provided. 

#### Header (Mobile)
The famous hamburger icon should appear on the right hand side for mobile experiences. User will be able to `click` and the navigation links will appear in a dropdown fashion.

#### Form
I wasn't sure what fields were required so I made all fields required. I added a "footnote" at the bottom of the form so User would be informed.
Validation was added to make sure all fields were populated properly. A secondary validation was also added for the First/Last Name/Email fields. The secondary validation checks that the first/last name weren't entered as `123` or `@@!29bob`. As for the email, it was just to make sure it was a valid email address. The secondary validation is executed on `blur`. So once the User moves to next field, the error will pop up on the previous field.

On form submission, I placed a `setTimeout` for the sake of UI purposes to show a loading indicator followed by a success message.

### Known Issues:
 - Safari has issues with `clip-path`. Works fine for Chrome and Firefox. 

### Nice To Have
Being that this is my first time using Parcel, I lacked the proper understanding for incorporating `handlebars` and properly using it. If I had I would of setup something like this:

```
/views
    /partials
        top.hbs
        middle.hbs
        bottom.hbs
    /components
        nav.hbs
        form.hbs
        banner.hbs
```

