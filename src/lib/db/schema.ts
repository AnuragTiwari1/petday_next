import {
  mysqlTable,
  primaryKey,
  int,
  datetime,
  varchar,
  text,
  tinyint
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const appointment = mysqlTable(
  "appointment",
  {
    aid: int().autoincrement().notNull(),
    customerId: int("customer_id").notNull(),
    petId: int("pet_id").notNull(),
    bookDate: datetime("book_date", { mode: "string" }).notNull(),
    type: varchar({ length: 255 }).notNull(),
    status: varchar({ length: 255 }).notNull(),
    payAmt: int("pay_amt").notNull(),
    payMethod: int("pay_method").notNull(),
    payStatus: varchar("pay_status", { length: 255 }).notNull(),
    transactionId: varchar("transaction_id", { length: 255 }).notNull(),
    payDatetime: datetime("pay_datetime", { mode: "string" })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    refundAmt: int("refund_amt").notNull(),
    refundDate: datetime("refund_date", { mode: "string" }).notNull(),
    refundTransactionId: varchar("refund_transaction_id", {
      length: 255,
    }).notNull(),
    serviceProviderId: int("service_provider_id").notNull(),
  },
  (table) => [primaryKey({ columns: [table.aid], name: "appointment_aid" })]
);

export const customer = mysqlTable(
  "customer",
  {
    customerId: int("customer_id").autoincrement().notNull(),
    name: varchar({ length: 200 }).notNull(),
    lname: varchar({ length: 200 }).notNull(),
    email: varchar({ length: 200 }).notNull(),
    mobile: varchar({ length: 200 }).notNull(),
    password: varchar({ length: 255 }).notNull(),
    gender: varchar({ length: 100 }).notNull(),
    dob: varchar({ length: 100 }).notNull(),
    address: varchar({ length: 300 }).notNull(),
    city: varchar({ length: 300 }).notNull(),
    state: varchar({ length: 300 }).notNull(),
    pincode: varchar({ length: 300 }).notNull(),
    created: datetime({ mode: "string" })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.customerId], name: "customer_customer_id" }),
  ]
);

export const groomerDetails = mysqlTable(
  "groomer_details",
  {
    groomerId: int("groomer_id").autoincrement().notNull(),
    firstName: varchar("first_name", { length: 50 }),
    lastName: varchar("last_name", { length: 50 }),
    mobile: varchar({ length: 15 }),
    email: varchar({ length: 100 }),
    password: varchar({ length: 255 }).notNull(),
    location: varchar({ length: 100 }),
    postalAddress: text("postal_address"),
    pin: varchar({ length: 10 }),
    city: varchar({ length: 50 }),
    state: varchar({ length: 50 }),
    gender: varchar({ length: 10 }),
    created: datetime({ mode: "string" }).default(sql`(CURRENT_TIMESTAMP)`),
    active: tinyint(),
    picture: varchar({ length: 255 }),
    bio: text(),
    gstNumber: varchar("gst_number", { length: 15 }),
    groomingCenterName: varchar("grooming_center_name", { length: 100 }),
    workingDays: varchar("working_days", { length: 50 }),
    workinghrsFrm: varchar("workinghrs_frm", { length: 200 }),
    workinghrsTo: varchar("workinghrs_to", { length: 200 }).notNull(),
  },
  (table) => [
    primaryKey({
      columns: [table.groomerId],
      name: "groomer_details_groomer_id",
    }),
  ]
);

export const petProfile = mysqlTable(
  "pet_profile",
  {
    petId: int("pet_id").autoincrement().notNull(),
    customerId: int("customer_id").notNull(),
    name: varchar({ length: 255 }).notNull(),
    lname: varchar({ length: 255 }).notNull(),
    gender: varchar({ length: 100 }).notNull(),
    breed: varchar({ length: 255 }).notNull(),
    age: int().notNull(),
    picture: varchar({ length: 300 }).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.petId], name: "pet_profile_pet_id" }),
  ]
);

export const products = mysqlTable(
  "products",
  {
    itemId: int("item_id").autoincrement().notNull(),
    itemName: varchar("item_name", { length: 200 }).notNull(),
    category: varchar({ length: 200 }).notNull(),
    itemHsn: varchar("item_hsn", { length: 200 }).notNull(),
    description: text().notNull(),
    dimension: int().notNull(),
    weight: int().notNull(),
    itemImage: varchar("item_image", { length: 255 }).notNull(),
    mrp: int().notNull(),
    discount: int().notNull(),
    gstPercent: int("gst_percent").notNull(),
    stock: varchar({ length: 200 }).notNull(),
    maxQuantity: int("max_quantity").notNull(),
    personalize: varchar({ length: 200 }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.itemId], name: "products_item_id" })]
);

export const vetdetails = mysqlTable(
  "vetdetails",
  {
    vetid: int().autoincrement().notNull(),
    firstName: varchar({ length: 50 }),
    lastName: varchar({ length: 50 }),
    mobile: varchar({ length: 15 }),
    email: varchar({ length: 100 }),
    password: varchar({ length: 255 }).notNull(),
    location: varchar({ length: 100 }),
    postaladdress: text(),
    pin: varchar({ length: 10 }),
    city: varchar({ length: 50 }),
    state: varchar({ length: 50 }),
    gender: varchar({ length: 10 }),
    created: datetime({ mode: "string" }).default(sql`(CURRENT_TIMESTAMP)`),
    active: tinyint(),
    picture: varchar({ length: 255 }),
    bio: text(),
    gstno: varchar({ length: 15 }),
    medicalregno: varchar({ length: 50 }),
    workingdays: varchar({ length: 50 }),
    workinghrsFrm: varchar("workinghrs_frm", { length: 200 }),
    workinghrsTo: varchar("workinghrs_to", { length: 200 }).notNull(),
    speciality: varchar({ length: 100 }),
    clinicname: varchar({ length: 100 }),
  },
  (table) => [primaryKey({ columns: [table.vetid], name: "vetdetails_vetid" })]
);
