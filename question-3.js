/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:

/// 1. เลือกใช้ linear search 
/// big O notiation =  O(n)
/// เพราะ ต้องตรวจสอบทุกค่า โดยการ วน loop เพื่อหาชื่อนักเรียน 


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
/// เลือกใช้ binary search 
///  big O notiation =  O(log n ) 
// เพราะ มีการลดขนาดลงตาม Input แต่ละครึ่งนึง หรือ ทำงานโดยลดปริมาณข้อมูลที่ต้องประมวลผลลงครึ่งหนึ่งในแต่ละขั้นตอน.
 
*/

/* 
Which function is more efficient and why?
Answer:
findProductPrice (binary search) มีประสิทธิภาพมากกว่า เพราะไม่ต้องตรวจสอบข้อมูลทุกข้อมูล และ ลดขนาดข้อมูลลงครึ่งหนึ่งในทุกขั้นตอน แต่จะทำได้เฉพาะข้อมูลที่มีการจัดเรียงกันแล้ว 
โดยที่ findStudentById (linear search) จะมีการวนลูปทุกตัว ทำให้การทำงานช้ากว่า 
 


*/
