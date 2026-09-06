# คำแนะนำในการสร้าง JS Tutorial Markdown และ Example Files

## ภาพรวม

ใช้เอกสารนี้เป็นแนวทางในการสร้างไฟล์ `.md` และไฟล์ตัวอย่าง สำหรับหัวข้อ JavaScript จาก W3Schools

**ข้อมูลเริ่มต้น:** `from https://www.w3schools.com/js/{xxxxxx}`

---

## ขั้นตอนที่ 1: สร้างโฟลเดอร์หัวข้อ

ใช้เลขรุ่น (version number) จากโฟลเดอร์ก่อนหน้า เช่น `05.1311-js-HTMLDOM` ถัดไปเป็น `05.1312-js-HTMLDOMMethods`

```
JS2-basic-sandbox/
└── 05.13XX-js-{Topic_Name}/
    └── {topic-file}.md
```

---

## ขั้นตอนที่ 2: สร้าง Markdown File

ให้ใช้ไฟล์ `JS2-basic-sandbox/05.1311-js-HTMLDOM/js-htmldom.md` เป็น template โดยมีโครงสร้างดังนี้:

```markdown
# JavaScript {Topic Name}

[Back to JS page](../JS-page/index.php)

Table of Contents
- [JavaScript {Topic Name}](#javascript-{topic-name})
  - [{Section 1}](#{section-1-link})
    - [Example 1](#example-1)
  - [{Section 2}](#{section-2-link})
    - [Example 2](#example-2)
  ...
  - [Document](#document)
  - [Reference](#reference)


## {Section 1}

{คำอธิบาย}

```html
{โค้ด HTML + JavaScript ตัวอย่าง}
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-{section-name}/index.html)

## {Section 2}

{คำอธิบาย}

```html
{โค้ด HTML + JavaScript ตัวอย่าง}
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-{section-name}/index.html)

...

## Document

Document in project

You can [Download PDF]({topic-file}.pdf) file.

## Reference

- [W3Schools JavaScript {Topic Name}](https://www.w3schools.com/js/{xxxxxx})
```

### กฎการตั้งชื่อ

| รายการ | รูปแบบ | ตัวอย่าง |
|--------|--------|----------|
| Section image | `images/p{n}.png` | `images/p1.png`, `images/p2.png` |
| Example directory | `ex{n}-{section-name}/` | `ex1-htmldom_intro/`, `ex2-accessing_elements/` |
| Example file | `index.html` | `ex1-htmldom_intro/index.html` |
| PDF file | `{topic-file}.pdf` | `js-htmldom.pdf` |
| Code block language | ` ```html ` | สำหรับ JS + HTML |
| Back link | `../JS-page/index.php` | ใช้สำหรับ JS2-basic-sandbox |

---

## ขั้นตอนที่ 3: สร้าง Example Directories และ Files

สำหรับแต่ละ section ใน markdown file ที่มี code block และ `**Result** [View Example](ex{n}-{name}/index.html)`:

1. สร้างโฟลเดอร์ `ex{n}-{name}/`
2. สร้างไฟล์ `index.html` ข้างใน
3. คัดลอกโค้ดจาก code block ใน markdown ไปใส่ใน `index.html`

### ตัวอย่าง Structure ที่เสร็จสมบูรณ์

```
JS2-basic-sandbox/
└── 05.1311-js-HTMLDOM/
    ├── js-htmldom.md
    ├── ex1-htmldom_intro/
    │   └── index.html
    └── ex2-accessing_elements/
        └── index.html
```

---

## ขั้นตอนที่ 4: ตรวจสอบความถูกต้อง

- [ ] Markdown file มี Table of Contents ครบทุก section
- [ ] แต่ละ section มี code block
- [ ] แต่ละ section มี image placeholder: `![](images/p{n}.png)`
- [ ] แต่ละ section มี Example link: `**Result** [View Example](ex{n}-{name}/index.html)`
- [ ] ทุก Example link มี directory และ `index.html` จริง
- [ ] ทุก `index.html` มีโค้ดตรงกับ code block ใน markdown
- [ ] มี Document section พร้อม PDF link
- [ ] มี Reference section พร้อม W3Schools link

---

## Reference Template Files

- **PHP Template:** `php-2024/04.1025-php-Data_Types/php-Data _Types.md`
- **JS Example:** `JS2-basic-sandbox/05.1311-js-HTMLDOM/js-htmldom.md`