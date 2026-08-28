/* ═══════════════════════════════════════════
   LUMIÈRE Hotel Management — Main Application
═══════════════════════════════════════════ */

// ═══════ STATE ═══════
const STATE = {
  rooms: [],
  guests: [],
  reservations: [],
  staff: [],
  orders: [],
  hkTasks: [],
  invoices: [],
  cart: [],
  selectedRoom: null,
  bookDates: { checkIn: null, checkOut: null },
  billItemCount: 1,
};

// ═══════ SEED DATA ═══════
function seedData() {
  STATE.rooms = [
    { id: 'R101', number: '101', floor: 1, type: 'Standard',     capacity: 2, price: 3500,  status: 'occupied',    amenities: ['WiFi', 'AC', 'TV'] },
    { id: 'R102', number: '102', floor: 1, type: 'Standard',     capacity: 2, price: 3500,  status: 'available',   amenities: ['WiFi', 'AC', 'TV'] },
    { id: 'R103', number: '103', floor: 1, type: 'Standard',     capacity: 1, price: 3200,  status: 'available',   amenities: ['WiFi', 'AC', 'TV'] },
    { id: 'R104', number: '104', floor: 1, type: 'Standard',     capacity: 2, price: 3500,  status: 'maintenance', amenities: ['WiFi', 'AC'] },
    { id: 'R105', number: '105', floor: 1, type: 'Standard',     capacity: 2, price: 3500,  status: 'reserved',    amenities: ['WiFi', 'AC', 'TV'] },
    { id: 'R201', number: '201', floor: 2, type: 'Deluxe',       capacity: 2, price: 5500,  status: 'occupied',    amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'] },
    { id: 'R202', number: '202', floor: 2, type: 'Deluxe',       capacity: 2, price: 5500,  status: 'available',   amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'] },
    { id: 'R203', number: '203', floor: 2, type: 'Deluxe',       capacity: 3, price: 6000,  status: 'occupied',    amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Balcony'] },
    { id: 'R204', number: '204', floor: 2, type: 'Deluxe',       capacity: 2, price: 5500,  status: 'reserved',    amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'] },
    { id: 'R301', number: '301', floor: 3, type: 'Suite',        capacity: 4, price: 9500,  status: 'available',   amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Jacuzzi', 'Balcony'] },
    { id: 'R302', number: '302', floor: 3, type: 'Suite',        capacity: 4, price: 9500,  status: 'occupied',    amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Jacuzzi'] },
    { id: 'R303', number: '303', floor: 3, type: 'Suite',        capacity: 4, price: 10000, status: 'reserved',    amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Jacuzzi', 'Balcony'] },
    { id: 'R401', number: '401', floor: 4, type: 'Presidential', capacity: 6, price: 22000, status: 'available',   amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Jacuzzi', 'Balcony'] },
    { id: 'R402', number: '402', floor: 4, type: 'Presidential', capacity: 4, price: 22000, status: 'occupied',    amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Jacuzzi', 'Balcony'] },
  ];

  STATE.guests = [
    { id: 'G001', fname: 'Arjun',    lname: 'Sharma',    email: 'arjun@gmail.com',    phone: '+91 98765 43210', nationality: 'Indian',   dob: '1985-03-14', idType: 'Aadhar', idNum: '1234-5678-9012', visits: 5,  vip: true  },
    { id: 'G002', fname: 'Priya',    lname: 'Mehta',     email: 'priya@gmail.com',    phone: '+91 87654 32109', nationality: 'Indian',   dob: '1990-07-22', idType: 'Passport', idNum: 'P1234567', visits: 2,  vip: false },
    { id: 'G003', fname: 'James',    lname: 'Mitchell',  email: 'james@gmail.com',    phone: '+44 7911 123456', nationality: 'British',  dob: '1978-11-05', idType: 'Passport', idNum: 'UK987654', visits: 1,  vip: false },
    { id: 'G004', fname: 'Deepika',  lname: 'Nair',      email: 'deepika@gmail.com',  phone: '+91 76543 21098', nationality: 'Indian',   dob: '1992-01-30', idType: 'Aadhar', idNum: '9876-5432-1098', visits: 8,  vip: true  },
    { id: 'G005', fname: 'Rohan',    lname: 'Gupta',     email: 'rohan@gmail.com',    phone: '+91 65432 10987', nationality: 'Indian',   dob: '1988-09-16', idType: 'License', idNum: 'MH0420180012345', visits: 3, vip: false },
  ];

  STATE.reservations = [
    { id: 'BK001', guestId: 'G001', guestName: 'Arjun Sharma',   roomId: 'R302', room: '302', checkIn: '2026-02-18', checkOut: '2026-02-22', status: 'Checked-In', amount: 38000, nights: 4 },
    { id: 'BK002', guestId: 'G002', guestName: 'Priya Mehta',    roomId: 'R201', room: '201', checkIn: '2026-02-18', checkOut: '2026-02-20', status: 'Checked-In', amount: 11000, nights: 2 },
    { id: 'BK003', guestId: 'G003', guestName: 'James Mitchell', roomId: 'R402', room: '402', checkIn: '2026-02-17', checkOut: '2026-02-21', status: 'Checked-In', amount: 88000, nights: 4 },
    { id: 'BK004', guestId: 'G004', guestName: 'Deepika Nair',   roomId: 'R203', room: '203', checkIn: '2026-02-18', checkOut: '2026-02-19', status: 'Checked-In', amount: 6000,  nights: 1 },
    { id: 'BK005', guestId: 'G005', guestName: 'Rohan Gupta',    roomId: 'R101', room: '101', checkIn: '2026-02-16', checkOut: '2026-02-18', status: 'Confirmed',  amount: 7000,  nights: 2 },
    { id: 'BK006', guestId: 'G001', guestName: 'Arjun Sharma',   roomId: 'R301', room: '301', checkIn: '2026-02-20', checkOut: '2026-02-24', status: 'Confirmed',  amount: 38000, nights: 4 },
    { id: 'BK007', guestId: 'G002', guestName: 'Priya Mehta',    roomId: 'R105', room: '105', checkIn: '2026-02-19', checkOut: '2026-02-21', status: 'Pending',    amount: 7000,  nights: 2 },
  ];

  STATE.staff = [
    { id: 'S001', fname: 'Rajesh',  lname: 'Kumar',   dept: 'Front Desk',   role: 'Receptionist',   shift: 'Morning (7AM-3PM)',   phone: '+91 99001 11001', email: 'rajesh@lumiere.com',  join: '2023-03-01', status: 'Active'  },
    { id: 'S002', fname: 'Sunita',  lname: 'Devi',    dept: 'Housekeeping', role: 'Head Housekeeper', shift: 'Morning (7AM-3PM)',  phone: '+91 99002 22002', email: 'sunita@lumiere.com',  join: '2022-01-15', status: 'Active'  },
    { id: 'S003', fname: 'Ramesh',  lname: 'Kumar',   dept: 'Housekeeping', role: 'Housekeeper',    shift: 'Evening (3PM-11PM)',   phone: '+91 99003 33003', email: 'ramesh@lumiere.com',  join: '2023-06-01', status: 'Active'  },
    { id: 'S004', fname: 'Priya',   lname: 'Singh',   dept: 'Restaurant',   role: 'Chef',           shift: 'Morning (7AM-3PM)',    phone: '+91 99004 44004', email: 'priya.s@lumiere.com', join: '2021-09-10', status: 'Active'  },
    { id: 'S005', fname: 'Anil',    lname: 'Verma',   dept: 'Maintenance',  role: 'Engineer',       shift: 'Night (11PM-7AM)',     phone: '+91 99005 55005', email: 'anil@lumiere.com',    join: '2022-11-20', status: 'Active'  },
    { id: 'S006', fname: 'Kavita',  lname: 'Rao',     dept: 'Front Desk',   role: 'Concierge',      shift: 'Evening (3PM-11PM)',   phone: '+91 99006 66006', email: 'kavita@lumiere.com',  join: '2024-01-05', status: 'Active'  },
    { id: 'S007', fname: 'Mohan',   lname: 'Lal',     dept: 'Security',     role: 'Security Guard', shift: 'Night (11PM-7AM)',     phone: '+91 99007 77007', email: 'mohan@lumiere.com',   join: '2023-08-14', status: 'Off Duty'},
  ];

  STATE.orders = [
    { id: 'ORD001', type: 'Room Service', location: 'Room 302', items: ['Butter Chicken', 'Naan x2', 'Lassi'], total: 850,  status: 'In Preparation', time: '09:30' },
    { id: 'ORD002', type: 'Dine-In',      location: 'Table 3',  items: ['Continental Breakfast', 'Coffee x2'], total: 480,  status: 'Served',         time: '09:15' },
    { id: 'ORD003', type: 'Room Service', location: 'Room 201', items: ['Club Sandwich', 'Fresh Juice'],        total: 420,  status: 'Delivered',      time: '08:45' },
  ];

  STATE.hkTasks = [
    { id: 'HK001', room: '104', type: 'Maintenance',     staff: 'Anil Verma',    priority: 'Urgent',  status: 'in-progress', notes: 'AC not working' },
    { id: 'HK002', room: '203', type: 'Turndown Service', staff: 'Sunita Devi',  priority: 'Normal',  status: 'pending',     notes: '' },
    { id: 'HK003', room: '101', type: 'Regular Cleaning', staff: 'Ramesh Kumar', priority: 'Normal',  status: 'completed',   notes: '' },
    { id: 'HK004', room: '302', type: 'Deep Cleaning',    staff: 'Priya Singh',  priority: 'High',    status: 'pending',     notes: 'Pre-arrival cleaning' },
  ];

  STATE.invoices = [
    { id: 'INV001', guest: 'Arjun Sharma',   room: '302', amount: 38000, method: 'Card', status: 'Paid',    date: '2026-02-18' },
    { id: 'INV002', guest: 'James Mitchell', room: '402', amount: 88000, method: 'Card', status: 'Paid',    date: '2026-02-17' },
    { id: 'INV003', guest: 'Priya Mehta',    room: '201', amount: 11000, method: 'UPI',  status: 'Pending', date: '2026-02-18' },
    { id: 'INV004', guest: 'Deepika Nair',   room: '203', amount: 6000,  method: 'Cash', status: 'Paid',    date: '2026-02-18' },
  ];
}

const MENU = [
  { name: 'Continental Breakfast', price: 350, cat: 'breakfast' },
  { name: 'Full English Breakfast', price: 480, cat: 'breakfast' },
  { name: 'Masala Omelette', price: 220, cat: 'breakfast' },
  { name: 'Butter Chicken', price: 480, cat: 'lunch' },
  { name: 'Paneer Tikka Masala', price: 420, cat: 'lunch' },
  { name: 'Grilled Salmon', price: 680, cat: 'lunch' },
  { name: 'Caesar Salad', price: 280, cat: 'lunch' },
  { name: 'Club Sandwich', price: 320, cat: 'lunch' },
  { name: 'Americano', price: 180, cat: 'beverages' },
  { name: 'Fresh Juice', price: 200, cat: 'beverages' },
  { name: 'Masala Chai', price: 120, cat: 'beverages' },
  { name: 'Green Tea', price: 140, cat: 'beverages' },
  { name: 'Chocolate Fondant', price: 320, cat: 'desserts' },
  { name: 'Mango Sorbet', price: 250, cat: 'desserts' },
  { name: 'Gulab Jamun', price: 180, cat: 'desserts' },
];

// ═══════ NAVIGATION ═══════
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  document.getElementById('pageTitle').textContent = page.charAt(0).toUpperCase() + page.slice(1).replace(/([A-Z])/g,' $1');
  if (window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('open');
  renderPage(page);
}

function renderPage(page) {
  const fns = {
    dashboard: renderDashboard,
    rooms: renderRooms,
    guests: renderGuests,
    reservations: renderReservations,
    checkin: renderCheckinOut,
    restaurant: renderRestaurant,
    housekeeping: renderHousekeeping,
    billing: renderBilling,
    staff: renderStaff,
    reports: renderReports,
  };
  if (fns[page]) fns[page]();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ═══════ DATE ═══════
function updateDate() {
  const el = document.getElementById('dateDisplay');
  if (el) el.textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// ═══════ TOAST ═══════
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.borderColor = type === 'error' ? 'var(--rose)' : 'var(--gold)';
  t.style.color = type === 'error' ? 'var(--rose)' : 'var(--gold)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ═══════ MODAL ═══════
function openModal(id) {
  const m = document.getElementById(id);
  m.classList.add('open');
  m.style.display = 'flex';
}

function closeModal(id) {
  const m = document.getElementById(id);
  m.classList.remove('open');
  setTimeout(() => { m.style.display = 'none'; }, 300);
}

// ═══════ DASHBOARD ═══════
function renderDashboard() {
  renderDashRoomGrid();
  renderArrivals();
  renderActivity();
  renderRevenueChart();
}

function renderDashRoomGrid() {
  const el = document.getElementById('dashRoomGrid');
  if (!el) return;
  const colorMap = { available: '#7aab72', occupied: '#c9a96e', maintenance: '#b87a8e', reserved: '#7a98b8' };
  el.innerHTML = STATE.rooms.map(r =>
    `<div class="room-dot" style="background:${colorMap[r.status]}" title="Room ${r.number} — ${r.type} (${r.status})"></div>`
  ).join('');
  // fill to 80
  const extra = 80 - STATE.rooms.length;
  for (let i = 0; i < extra; i++) {
    el.innerHTML += `<div class="room-dot" style="background:${colorMap['available']}"></div>`;
  }
}

function renderArrivals() {
  const el = document.getElementById('arrivalsToday');
  if (!el) return;
  const today = new Date().toISOString().split('T')[0];
  const arr = STATE.reservations.filter(r => r.checkIn === today || r.status === 'Confirmed');
  el.innerHTML = arr.slice(0, 5).map(r =>
    `<div class="mini-list-item">
      <div><strong>${r.guestName}</strong><br><span>Room ${r.room} · ${r.nights} nights</span></div>
      <span class="badge badge-gold">Arrival</span>
    </div>`
  ).join('') || '<div class="mini-list-item"><span>No arrivals today</span></div>';
}

function renderActivity() {
  const el = document.getElementById('activityFeed');
  if (!el) return;
  const activities = [
    { text: 'Arjun Sharma checked into Room 302', time: '09:42 AM', color: '#7aab72' },
    { text: 'Invoice INV004 generated for Deepika Nair', time: '09:30 AM', color: '#c9a96e' },
    { text: 'Housekeeping task assigned for Room 104', time: '09:15 AM', color: '#b87a8e' },
    { text: 'New booking BK007 confirmed for Priya Mehta', time: '08:55 AM', color: '#7a98b8' },
    { text: 'James Mitchell checked into Room 402', time: '08:30 AM', color: '#7aab72' },
    { text: 'Room 104 placed under maintenance', time: '08:00 AM', color: '#b87a8e' },
  ];
  el.innerHTML = activities.map(a =>
    `<div class="activity-item">
      <div class="act-dot" style="background:${a.color}"></div>
      <div><div class="act-text">${a.text}</div><div class="act-time">${a.time}</div></div>
    </div>`
  ).join('');
}

function renderRevenueChart() {
  const el = document.getElementById('revenueChart');
  if (!el) return;
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const vals = [98000, 112000, 87000, 134000, 120000, 156000, 124500];
  const max = Math.max(...vals);
  el.innerHTML = days.map((d, i) =>
    `<div class="bar-wrap">
      <div class="bar" style="height:${(vals[i]/max*100)}%" title="₹${vals[i].toLocaleString()}"></div>
      <div class="bar-label">${d}</div>
    </div>`
  ).join('');
}

// ═══════ BOOKING ═══════
function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 3);

  const ci = document.getElementById('bookCheckIn');
  const co = document.getElementById('bookCheckOut');
  if (ci) ci.value = tomorrow.toISOString().split('T')[0];
  if (co) co.value = nextWeek.toISOString().split('T')[0];
}

function searchRooms() {
  const ci = document.getElementById('bookCheckIn').value;
  const co = document.getElementById('bookCheckOut').value;
  if (!ci || !co) return showToast('Please select check-in and check-out dates', 'error');
  if (ci >= co) return showToast('Check-out must be after check-in', 'error');

  STATE.bookDates = { checkIn: ci, checkOut: co };
  const nights = Math.round((new Date(co) - new Date(ci)) / (1000 * 60 * 60 * 24));

  const avail = STATE.rooms.filter(r => r.status === 'available');
  const el = document.getElementById('searchResults');

  el.innerHTML = `<div style="font-size:0.7rem;color:var(--text3);letter-spacing:1px;margin-bottom:12px;text-transform:uppercase">${avail.length} rooms available for ${nights} night${nights > 1 ? 's' : ''}</div>`;

  el.innerHTML += avail.map(r =>
    `<div class="room-result-card">
      <div class="rr-info">
        <div class="rr-type">${r.type} Room</div>
        <div class="rr-num">ROOM ${r.number} · FLOOR ${r.floor} · ${r.capacity} GUESTS</div>
        <div class="rr-amenities">${r.amenities.map(a => `<span class="rr-amenity">${a}</span>`).join('')}</div>
      </div>
      <div class="rr-price">
        <div class="rr-price-val">₹${r.price.toLocaleString()}</div>
        <div class="rr-price-label">per night</div>
        <div style="margin-top:4px;font-size:0.65rem;color:var(--text3)">Total: ₹${(r.price * nights).toLocaleString()}</div>
        <button class="btn btn-primary" style="margin-top:12px" onclick='openBookingModal(${JSON.stringify(r)}, ${nights})'>Book Now</button>
      </div>
    </div>`
  ).join('');
}

function openBookingModal(room, nights) {
  STATE.selectedRoom = room;
  document.getElementById('selectedRoomInfo').innerHTML =
    `<strong>Room ${room.number}</strong> — ${room.type} · ₹${room.price.toLocaleString()}/night`;
  updateBookingSummary(room, nights);
  openModal('bookingModal');
}

function updateBookingSummary(room, nights) {
  const subtotal = room.price * nights;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;
  document.getElementById('bookingSummary').innerHTML = `
    <div class="sum-row"><span>Room ${room.number} × ${nights} nights</span><span>₹${subtotal.toLocaleString()}</span></div>
    <div class="sum-row"><span>GST (18%)</span><span>₹${tax.toLocaleString()}</span></div>
    <div class="sum-row total"><span>Total Amount</span><span>₹${total.toLocaleString()}</span></div>
  `;
}

function confirmBooking() {
  const fname = document.getElementById('guestFName').value.trim();
  const lname = document.getElementById('guestLName').value.trim();
  const email = document.getElementById('guestEmail').value.trim();
  const phone = document.getElementById('guestPhone').value.trim();

  if (!fname || !lname || !email || !phone) return showToast('Please fill all required fields', 'error');

  const room = STATE.selectedRoom;
  const dates = STATE.bookDates;
  const nights = Math.round((new Date(dates.checkOut) - new Date(dates.checkIn)) / (1000 * 60 * 60 * 24));

  const id = 'BK' + String(STATE.reservations.length + 1).padStart(3, '0');
  const gid = 'G' + String(STATE.guests.length + 1).padStart(3, '0');

  // Add guest
  const existingGuest = STATE.guests.find(g => g.email === email);
  if (!existingGuest) {
    STATE.guests.push({ id: gid, fname, lname, email, phone, nationality: 'Not specified', visits: 1, vip: false });
  }

  // Add reservation
  STATE.reservations.push({
    id, guestId: existingGuest ? existingGuest.id : gid,
    guestName: fname + ' ' + lname,
    roomId: room.id, room: room.number,
    checkIn: dates.checkIn, checkOut: dates.checkOut,
    status: 'Confirmed', amount: room.price * nights + Math.round(room.price * nights * 0.18), nights
  });

  // Update room status
  const ri = STATE.rooms.findIndex(r => r.id === room.id);
  if (ri !== -1) STATE.rooms[ri].status = 'reserved';

  closeModal('bookingModal');
  showToast(`🎉 Booking ${id} confirmed for ${fname} ${lname}!`);

  // Reset form
  ['guestFName','guestLName','guestEmail','guestPhone','guestRequests','guestIdNum'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('searchResults').innerHTML = '';
}

// ═══════ RESERVATIONS ═══════
function renderReservations() {
  renderReservationTable(STATE.reservations);
}

function renderReservationTable(data) {
  const tbody = document.getElementById('reservationBody');
  if (!tbody) return;
  tbody.innerHTML = data.map(r => `
    <tr>
      <td><strong>${r.id}</strong></td>
      <td>${r.guestName}</td>
      <td>Room ${r.room}</td>
      <td>${formatDate(r.checkIn)}</td>
      <td>${formatDate(r.checkOut)}</td>
      <td><span class="badge ${statusBadge(r.status)}">${r.status}</span></td>
      <td>₹${r.amount.toLocaleString()}</td>
      <td>
        <div style="display:flex;gap:6px">
          ${r.status === 'Confirmed' || r.status === 'Pending' ?
            `<button class="btn btn-sm btn-outline" onclick="cancelReservation('${r.id}')">Cancel</button>` : ''}
          ${r.status === 'Confirmed' ?
            `<button class="btn btn-sm btn-primary" onclick="checkinReservation('${r.id}')">Check-In</button>` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

function filterReservations(val) {
  const filtered = STATE.reservations.filter(r =>
    r.guestName.toLowerCase().includes(val.toLowerCase()) ||
    r.id.toLowerCase().includes(val.toLowerCase()) ||
    r.room.includes(val)
  );
  renderReservationTable(filtered);
}

function filterResStatus(val) {
  const filtered = val ? STATE.reservations.filter(r => r.status === val) : STATE.reservations;
  renderReservationTable(filtered);
}

function cancelReservation(id) {
  const idx = STATE.reservations.findIndex(r => r.id === id);
  if (idx !== -1) {
    STATE.reservations[idx].status = 'Cancelled';
    const roomId = STATE.reservations[idx].roomId;
    const ri = STATE.rooms.findIndex(r => r.id === roomId);
    if (ri !== -1) STATE.rooms[ri].status = 'available';
    renderReservationTable(STATE.reservations);
    showToast(`Reservation ${id} cancelled`);
  }
}

function checkinReservation(id) {
  const idx = STATE.reservations.findIndex(r => r.id === id);
  if (idx !== -1) {
    STATE.reservations[idx].status = 'Checked-In';
    const roomId = STATE.reservations[idx].roomId;
    const ri = STATE.rooms.findIndex(r => r.id === roomId);
    if (ri !== -1) STATE.rooms[ri].status = 'occupied';
    renderReservationTable(STATE.reservations);
    showToast(`Guest checked in — ${STATE.reservations[idx].guestName}`);
  }
}

function openNewReservation() {
  showToast('Use the Online Booking section to create new reservations');
  navigate('booking');
}

// ═══════ ROOMS ═══════
let currentRoomView = 'grid';
let currentRoomFilter = 'all';

function renderRooms() {
  renderRoomsContainer();
  populateHKRoomSelect();
}

function renderRoomsContainer() {
  const container = document.getElementById('roomsContainer');
  if (!container) return;

  const filtered = currentRoomFilter === 'all'
    ? STATE.rooms
    : STATE.rooms.filter(r => r.status === currentRoomFilter);

  if (currentRoomView === 'grid') {
    container.className = 'rooms-grid';
    container.innerHTML = filtered.map(r => roomCardHTML(r)).join('');
  } else {
    container.className = 'rooms-list';
    container.innerHTML = `<div class="card">
      <table class="data-table">
        <thead><tr><th>Room</th><th>Type</th><th>Floor</th><th>Capacity</th><th>Price/Night</th><th>Status</th><th>Amenities</th><th>Actions</th></tr></thead>
        <tbody>${filtered.map(r => `
          <tr>
            <td><strong>${r.number}</strong></td>
            <td>${r.type}</td>
            <td>${r.floor}</td>
            <td>${r.capacity}</td>
            <td>₹${r.price.toLocaleString()}</td>
            <td><span class="badge ${roomStatusBadge(r.status)}">${r.status}</span></td>
            <td style="font-size:0.65rem;color:var(--text3)">${r.amenities.join(', ')}</td>
            <td>
              <select class="input" style="padding:4px 8px;font-size:0.7rem;width:130px" onchange="updateRoomStatus('${r.id}', this.value)">
                ${['available','occupied','maintenance','reserved'].map(s =>
                  `<option value="${s}" ${r.status===s?'selected':''}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`
                ).join('')}
              </select>
            </td>
          </tr>`
        ).join('')}</tbody>
      </table>
    </div>`;
  }
}

function roomCardHTML(r) {
  return `<div class="room-card" data-status="${r.status}">
    <div class="room-number">${r.number}</div>
    <div class="room-type">${r.type} · Floor ${r.floor}</div>
    <div class="room-price">₹${r.price.toLocaleString()} / night</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px">
      ${r.amenities.map(a => `<span class="rr-amenity">${a}</span>`).join('')}
    </div>
    <span class="badge ${roomStatusBadge(r.status)}">${r.status}</span>
    <div class="room-actions">
      <select class="input" style="padding:4px 8px;font-size:0.65rem" onchange="updateRoomStatus('${r.id}', this.value)">
        ${['available','occupied','maintenance','reserved'].map(s =>
          `<option value="${s}" ${r.status===s?'selected':''}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`
        ).join('')}
      </select>
    </div>
  </div>`;
}

function filterRooms(filter, btn) {
  currentRoomFilter = filter;
  document.querySelectorAll('.room-filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderRoomsContainer();
}

function setRoomView(view, btn) {
  currentRoomView = view;
  document.querySelectorAll('#gridViewBtn, #listViewBtn').forEach(b => b.classList.remove('active'));
  document.getElementById(view + 'ViewBtn').classList.add('active');
  renderRoomsContainer();
}

function updateRoomStatus(id, status) {
  const idx = STATE.rooms.findIndex(r => r.id === id);
  if (idx !== -1) {
    STATE.rooms[idx].status = status;
    showToast(`Room ${STATE.rooms[idx].number} marked as ${status}`);
  }
}

function openAddRoom() { openModal('addRoomModal'); }

function addRoom() {
  const num   = document.getElementById('newRoomNum').value.trim();
  const floor = document.getElementById('newRoomFloor').value;
  const type  = document.getElementById('newRoomType').value;
  const cap   = document.getElementById('newRoomCap').value;
  const price = parseInt(document.getElementById('newRoomPrice').value);
  const status = document.getElementById('newRoomStatus').value.toLowerCase();
  const amenities = [...document.querySelectorAll('.amenity-checks input:checked')].map(i => i.value);

  if (!num || !price) return showToast('Please fill room number and price', 'error');
  if (STATE.rooms.find(r => r.number === num)) return showToast('Room already exists', 'error');

  STATE.rooms.push({ id: 'R' + num, number: num, floor: parseInt(floor), type, capacity: parseInt(cap), price, status, amenities });
  closeModal('addRoomModal');
  renderRoomsContainer();
  showToast(`Room ${num} added successfully!`);
}

function populateHKRoomSelect() {
  const sel = document.getElementById('hkRoom');
  if (sel) sel.innerHTML = STATE.rooms.map(r => `<option value="${r.number}">Room ${r.number} (${r.status})</option>`).join('');
}

// ═══════ GUESTS ═══════
function renderGuests() {
  renderGuestTable(STATE.guests);
  updateGuestStats();
}

function renderGuestTable(data) {
  const tbody = document.getElementById('guestBody');
  if (!tbody) return;
  tbody.innerHTML = data.map(g => `
    <tr>
      <td><strong>${g.id}</strong></td>
      <td>${g.fname} ${g.lname}</td>
      <td>${g.email}</td>
      <td>${g.phone}</td>
      <td>${g.nationality}</td>
      <td>${g.visits}</td>
      <td>${g.vip ? '<span class="badge badge-gold">VIP</span>' : '—'}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="deleteGuest('${g.id}')">Remove</button>
      </td>
    </tr>
  `).join('');
}

function filterGuests(val) {
  const filtered = STATE.guests.filter(g =>
    (g.fname + ' ' + g.lname).toLowerCase().includes(val.toLowerCase()) ||
    g.email.toLowerCase().includes(val.toLowerCase()) ||
    g.phone.includes(val)
  );
  renderGuestTable(filtered);
}

function openAddGuest() { openModal('addGuestModal'); }

function addGuest() {
  const fname = document.getElementById('ngFName').value.trim();
  const lname = document.getElementById('ngLName').value.trim();
  const email = document.getElementById('ngEmail').value.trim();
  const phone = document.getElementById('ngPhone').value.trim();
  const nat   = document.getElementById('ngNat').value.trim() || 'Not specified';
  const vip   = document.getElementById('ngVip').checked;

  if (!fname || !lname || !email) return showToast('Please fill required fields', 'error');

  const id = 'G' + String(STATE.guests.length + 1).padStart(3, '0');
  STATE.guests.push({ id, fname, lname, email, phone, nationality: nat, visits: 0, vip });
  closeModal('addGuestModal');
  renderGuestTable(STATE.guests);
  updateGuestStats();
  showToast(`Guest ${fname} ${lname} added!`);
  ['ngFName','ngLName','ngEmail','ngPhone','ngNat','ngIdNum'].forEach(i => { const el = document.getElementById(i); if (el) el.value = ''; });
  document.getElementById('ngVip').checked = false;
}

function deleteGuest(id) {
  STATE.guests = STATE.guests.filter(g => g.id !== id);
  renderGuestTable(STATE.guests);
  updateGuestStats();
  showToast('Guest removed');
}

function updateGuestStats() {
  const gs = document.getElementById('gsTotal'); if (gs) gs.textContent = STATE.guests.length;
  const gv = document.getElementById('gsVip');   if (gv) gv.textContent = STATE.guests.filter(g => g.vip).length;
  const gn = document.getElementById('gsNew');   if (gn) gn.textContent = Math.floor(STATE.guests.length * 0.4);
  const gr = document.getElementById('gsRepeat'); if (gr) gr.textContent = STATE.guests.filter(g => g.visits > 1).length;
}

// ═══════ CHECK-IN / OUT ═══════
function renderCheckinOut() {
  renderPendingArrivals();
  renderPendingDepartures();
}

function renderPendingArrivals() {
  const el = document.getElementById('pendingArrivals');
  if (!el) return;
  const items = STATE.reservations.filter(r => r.status === 'Confirmed');
  const html = items.map(r => `
    <div class="ci-item">
      <div>
        <div style="color:var(--text)">${r.guestName}</div>
        <div style="font-size:0.65rem;color:var(--text3)">Room ${r.room} · ${r.nights} nights</div>
      </div>
      <button class="btn btn-sm btn-primary" onclick="checkinReservation('${r.id}');renderCheckinOut()">Check-In</button>
    </div>`
  ).join('');
  el.innerHTML += html || '<div style="font-size:0.75rem;color:var(--text3)">No pending arrivals</div>';
}

function renderPendingDepartures() {
  const el = document.getElementById('pendingDepartures');
  if (!el) return;
  const items = STATE.reservations.filter(r => r.status === 'Checked-In');
  const html = items.map(r => `
    <div class="ci-item">
      <div>
        <div style="color:var(--text)">${r.guestName}</div>
        <div style="font-size:0.65rem;color:var(--text3)">Room ${r.room} · Due out</div>
      </div>
      <button class="btn btn-sm btn-outline" onclick="checkoutGuest('${r.id}')">Check-Out</button>
    </div>`
  ).join('');
  el.innerHTML += html || '<div style="font-size:0.75rem;color:var(--text3)">No departures today</div>';
}

function processCheckIn() {
  const val = document.getElementById('ciSearch').value.trim();
  if (!val) return showToast('Enter booking ID or guest name', 'error');
  const res = STATE.reservations.find(r =>
    r.id.toLowerCase() === val.toLowerCase() ||
    r.guestName.toLowerCase().includes(val.toLowerCase())
  );
  if (!res) return showToast('Booking not found', 'error');
  if (res.status === 'Checked-In') return showToast('Guest already checked in');
  checkinReservation(res.id);
  document.getElementById('ciSearch').value = '';
  document.getElementById('pendingArrivals').innerHTML = '<div class="card-head" style="margin-top:1.5rem">Pending Arrivals</div>';
  renderPendingArrivals();
}

function processCheckOut() {
  const val = document.getElementById('coSearch').value.trim();
  if (!val) return showToast('Enter room number or guest name', 'error');
  const res = STATE.reservations.find(r =>
    (r.room === val || r.guestName.toLowerCase().includes(val.toLowerCase())) &&
    r.status === 'Checked-In'
  );
  if (!res) return showToast('No checked-in guest found', 'error');
  checkoutGuest(res.id);
}

function checkoutGuest(id) {
  const idx = STATE.reservations.findIndex(r => r.id === id);
  if (idx !== -1) {
    const res = STATE.reservations[idx];
    STATE.reservations[idx].status = 'Checked-Out';
    const ri = STATE.rooms.findIndex(r => r.id === res.roomId);
    if (ri !== -1) STATE.rooms[ri].status = 'available';
    document.getElementById('pendingDepartures').innerHTML = '<div class="card-head" style="margin-top:1.5rem">Today\'s Departures</div>';
    renderPendingDepartures();
    showToast(`${res.guestName} checked out from Room ${res.room}`);
  }
}

// ═══════ RESTAURANT ═══════
function renderRestaurant() {
  renderActiveOrders();
  renderMenuGrid('all');
}

function renderActiveOrders() {
  const el = document.getElementById('activeOrders');
  if (!el) return;
  el.innerHTML = STATE.orders.map(o => `
    <div class="order-card">
      <div class="order-title">${o.type} — ${o.location}</div>
      <div class="order-sub">${o.id} · ${o.time}</div>
      <div class="order-items">${o.items.join(', ')}</div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="badge ${o.status === 'Served' || o.status === 'Delivered' ? 'badge-green' : 'badge-gold'}">${o.status}</span>
        <span style="font-size:0.8rem;color:var(--gold)">₹${o.total}</span>
      </div>
      ${o.status !== 'Delivered' && o.status !== 'Served' ?
        `<button class="btn btn-sm btn-outline" style="margin-top:8px;width:100%" onclick="updateOrderStatus('${o.id}')">Mark as Served</button>` : ''}
    </div>
  `).join('') || '<div style="font-size:0.75rem;color:var(--text3)">No active orders</div>';
}

function updateOrderStatus(id) {
  const idx = STATE.orders.findIndex(o => o.id === id);
  if (idx !== -1) {
    STATE.orders[idx].status = 'Served';
    renderActiveOrders();
    showToast('Order marked as served!');
  }
}

function renderMenuGrid(cat) {
  const el = document.getElementById('menuGrid');
  if (!el) return;
  const items = cat === 'all' ? MENU : MENU.filter(m => m.cat === cat);
  el.innerHTML = items.map(m => `
    <div class="menu-item">
      <div class="menu-item-name">${m.name}</div>
      <div class="menu-item-price">₹${m.price}</div>
    </div>
  `).join('');
}

function showMenuCat(cat, btn) {
  document.querySelectorAll('.menu-cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenuGrid(cat);
}

function openNewOrder() {
  STATE.cart = [];
  document.getElementById('orderMenuSelect').innerHTML = MENU.map((m, i) =>
    `<div class="order-menu-item" id="omi${i}" onclick="toggleCartItem(${i},'${m.name}',${m.price})">
      <div style="font-size:0.78rem;color:var(--text)">${m.name}</div>
      <div style="font-size:0.7rem;color:var(--gold)">₹${m.price}</div>
    </div>`
  ).join('');
  updateCartDisplay();
  openModal('orderModal');
}

function toggleCartItem(idx, name, price) {
  const el = document.getElementById('omi' + idx);
  const ci = STATE.cart.findIndex(c => c.name === name);
  if (ci === -1) {
    STATE.cart.push({ name, price, qty: 1 });
    el.classList.add('selected');
  } else {
    STATE.cart.splice(ci, 1);
    el.classList.remove('selected');
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const ci = document.getElementById('cartItems');
  const ct = document.getElementById('cartTotal');
  const total = STATE.cart.reduce((s, c) => s + c.price * c.qty, 0);
  ci.innerHTML = STATE.cart.map(c => `<div class="cart-item"><span>${c.name}</span><span>₹${c.price}</span></div>`).join('') || '<div style="font-size:0.75rem;color:var(--text3)">No items selected</div>';
  ct.innerHTML = `<span>Total</span><span>₹${total.toLocaleString()}</span>`;
}

function placeOrder() {
  if (STATE.cart.length === 0) return showToast('Please select items', 'error');
  const type = document.getElementById('orderType').value;
  const loc  = document.getElementById('orderTable').value || 'Table 1';
  const id = 'ORD' + String(STATE.orders.length + 1).padStart(3, '0');
  const total = STATE.cart.reduce((s, c) => s + c.price * c.qty, 0);
  const now = new Date();
  STATE.orders.unshift({
    id, type, location: loc,
    items: STATE.cart.map(c => c.name),
    total, status: 'In Preparation',
    time: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
  });
  closeModal('orderModal');
  renderActiveOrders();
  showToast(`Order ${id} placed!`);
}

// ═══════ HOUSEKEEPING ═══════
function renderHousekeeping() {
  renderHKGrid('all');
  populateHKRoomSelect();
}

function renderHKGrid(filter) {
  const el = document.getElementById('hkGrid');
  if (!el) return;
  const data = filter === 'all' ? STATE.hkTasks : STATE.hkTasks.filter(t => t.status === filter);
  el.innerHTML = data.map(t => `
    <div class="hk-card">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
        <div class="hk-room">Room ${t.room}</div>
        <span class="badge ${t.priority === 'Urgent' ? 'badge-rose' : t.priority === 'High' ? 'badge-gold' : 'badge-gray'}">${t.priority}</span>
      </div>
      <div class="hk-type">${t.type}</div>
      <div class="hk-staff">👤 ${t.staff}</div>
      ${t.notes ? `<div style="font-size:0.7rem;color:var(--text3);margin-bottom:10px">${t.notes}</div>` : ''}
      <div class="hk-actions">
        <span class="badge ${t.status === 'completed' ? 'badge-green' : t.status === 'in-progress' ? 'badge-blue' : 'badge-gray'}">${t.status}</span>
        ${t.status !== 'completed' ?
          `<button class="btn btn-sm btn-outline" onclick="advanceHKStatus('${t.id}')">
            ${t.status === 'pending' ? 'Start' : 'Complete'}
          </button>` : ''}
      </div>
    </div>
  `).join('') || '<div style="grid-column:1/-1;color:var(--text3);font-size:0.8rem">No tasks found</div>';
}

function filterHK(filter, btn) {
  document.querySelectorAll('.hk-filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderHKGrid(filter);
}

function advanceHKStatus(id) {
  const idx = STATE.hkTasks.findIndex(t => t.id === id);
  if (idx !== -1) {
    const t = STATE.hkTasks[idx];
    if (t.status === 'pending') t.status = 'in-progress';
    else if (t.status === 'in-progress') t.status = 'completed';
    renderHKGrid('all');
    document.querySelectorAll('.hk-filters .filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.hk-filters .filter-btn').classList.add('active');
    showToast(`Task updated: ${t.type} for Room ${t.room}`);
  }
}

function openHKTask() { openModal('hkModal'); }

function assignHKTask() {
  const room  = document.getElementById('hkRoom').value;
  const type  = document.getElementById('hkType').value;
  const staff = document.getElementById('hkStaff').value;
  const priority = document.getElementById('hkPriority').value;
  const notes = document.getElementById('hkNotes').value;

  if (!room) return showToast('Please select a room', 'error');

  const id = 'HK' + String(STATE.hkTasks.length + 1).padStart(3, '0');
  STATE.hkTasks.push({ id, room, type, staff, priority, notes, status: 'pending' });
  closeModal('hkModal');
  renderHKGrid('all');
  showToast(`Task assigned to ${staff}`);
  document.getElementById('hkNotes').value = '';
}

// ═══════ BILLING ═══════
function renderBilling() {
  renderInvoiceTable();
  updatePaymentSummary();
}

function renderInvoiceTable() {
  const tbody = document.getElementById('invoiceBody');
  if (!tbody) return;
  tbody.innerHTML = STATE.invoices.map(inv => `
    <tr>
      <td><strong>${inv.id}</strong></td>
      <td>${inv.guest}</td>
      <td>Room ${inv.room}</td>
      <td>₹${inv.amount.toLocaleString()}</td>
      <td><span class="badge ${inv.status === 'Paid' ? 'badge-green' : 'badge-gold'}">${inv.status}</span></td>
      <td>
        ${inv.status === 'Pending' ?
          `<button class="btn btn-sm btn-primary" onclick="markInvoicePaid('${inv.id}')">Mark Paid</button>` :
          `<button class="btn btn-sm btn-outline" onclick="showToast('Invoice ${inv.id} — ₹${inv.amount.toLocaleString()}')">View</button>`}
      </td>
    </tr>
  `).join('');
}

function markInvoicePaid(id) {
  const idx = STATE.invoices.findIndex(i => i.id === id);
  if (idx !== -1) {
    STATE.invoices[idx].status = 'Paid';
    renderInvoiceTable();
    updatePaymentSummary();
    showToast(`Invoice ${id} marked as paid`);
  }
}

function updatePaymentSummary() {
  const paid = STATE.invoices.filter(i => i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
  const pend = STATE.invoices.filter(i => i.status === 'Pending').reduce((s, i) => s + i.amount, 0);
  const today = STATE.invoices.filter(i => i.date === new Date().toISOString().split('T')[0]).reduce((s, i) => s + i.amount, 0);
  const ep = document.getElementById('totalPaid');   if (ep) ep.textContent = '₹' + paid.toLocaleString();
  const en = document.getElementById('totalPending'); if (en) en.textContent = '₹' + pend.toLocaleString();
  const et = document.getElementById('totalToday');  if (et) et.textContent = '₹' + today.toLocaleString();
}

function openBillGen() { openModal('billModal'); }

function addBillItem() {
  const i = STATE.billItemCount++;
  const row = document.createElement('div');
  row.className = 'bill-item-row';
  row.innerHTML = `
    <input class="input" placeholder="Description" style="flex:2" id="billDesc${i}" />
    <input class="input" placeholder="Qty" type="number" style="flex:0.5" id="billQty${i}" value="1" />
    <input class="input" placeholder="Rate (₹)" type="number" style="flex:1" id="billRate${i}" />
  `;
  document.getElementById('billItemsList').appendChild(row);
}

function previewBill() {
  const guest = document.getElementById('billGuest').value || 'Guest';
  const room  = document.getElementById('billRoom').value || '—';
  const tax   = parseFloat(document.getElementById('billTax').value) || 18;
  const disc  = parseFloat(document.getElementById('billDisc').value) || 0;

  let subtotal = 0;
  let items = '';
  for (let i = 0; i < STATE.billItemCount; i++) {
    const desc = document.getElementById('billDesc' + i)?.value;
    const qty  = parseFloat(document.getElementById('billQty' + i)?.value) || 0;
    const rate = parseFloat(document.getElementById('billRate' + i)?.value) || 0;
    if (desc && rate) {
      const line = qty * rate;
      subtotal += line;
      items += `<div class="sum-row"><span>${desc} × ${qty}</span><span>₹${line.toLocaleString()}</span></div>`;
    }
  }

  const discAmt = Math.round(subtotal * disc / 100);
  const taxAmt  = Math.round((subtotal - discAmt) * tax / 100);
  const total   = subtotal - discAmt + taxAmt;

  document.getElementById('billTotalPreview').innerHTML = `
    <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:2px;color:var(--gold);margin-bottom:10px">Invoice Preview — ${guest} · Room ${room}</div>
    ${items}
    ${discAmt ? `<div class="sum-row"><span>Discount (${disc}%)</span><span>-₹${discAmt.toLocaleString()}</span></div>` : ''}
    <div class="sum-row"><span>Tax (${tax}%)</span><span>₹${taxAmt.toLocaleString()}</span></div>
    <div class="sum-row total"><span>Total Amount</span><span>₹${total.toLocaleString()}</span></div>
  `;
}

function generateBill() {
  const guest  = document.getElementById('billGuest').value || 'Guest';
  const room   = document.getElementById('billRoom').value || '—';
  const method = document.getElementById('billPayMethod').value;
  const tax    = parseFloat(document.getElementById('billTax').value) || 18;
  const disc   = parseFloat(document.getElementById('billDisc').value) || 0;

  let subtotal = 0;
  for (let i = 0; i < STATE.billItemCount; i++) {
    const qty  = parseFloat(document.getElementById('billQty' + i)?.value) || 0;
    const rate = parseFloat(document.getElementById('billRate' + i)?.value) || 0;
    subtotal += qty * rate;
  }

  const discAmt = Math.round(subtotal * disc / 100);
  const taxAmt  = Math.round((subtotal - discAmt) * tax / 100);
  const total   = subtotal - discAmt + taxAmt;

  const id = 'INV' + String(STATE.invoices.length + 1).padStart(3, '0');
  STATE.invoices.push({
    id, guest, room: room, amount: total, method, status: 'Paid',
    date: new Date().toISOString().split('T')[0]
  });

  closeModal('billModal');
  renderInvoiceTable();
  updatePaymentSummary();
  showToast(`Invoice ${id} generated for ₹${total.toLocaleString()}`);
  STATE.billItemCount = 1;
}

// ═══════ STAFF ═══════
function renderStaff() { renderStaffTable(STATE.staff); }

function renderStaffTable(data) {
  const tbody = document.getElementById('staffBody');
  if (!tbody) return;
  tbody.innerHTML = data.map(s => `
    <tr>
      <td><strong>${s.id}</strong></td>
      <td>${s.fname} ${s.lname}</td>
      <td>${s.dept}</td>
      <td>${s.role}</td>
      <td style="font-size:0.7rem;color:var(--text3)">${s.shift}</td>
      <td><span class="badge ${s.status === 'Active' ? 'badge-green' : 'badge-gray'}">${s.status}</span></td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="toggleStaffStatus('${s.id}')">
          ${s.status === 'Active' ? 'Mark Off' : 'Mark Active'}
        </button>
      </td>
    </tr>
  `).join('');
}

function filterStaff(val) {
  const filtered = STATE.staff.filter(s =>
    (s.fname + ' ' + s.lname).toLowerCase().includes(val.toLowerCase()) ||
    s.dept.toLowerCase().includes(val.toLowerCase()) ||
    s.role.toLowerCase().includes(val.toLowerCase())
  );
  renderStaffTable(filtered);
}

function filterStaffDept(val) {
  const filtered = val ? STATE.staff.filter(s => s.dept === val) : STATE.staff;
  renderStaffTable(filtered);
}

function toggleStaffStatus(id) {
  const idx = STATE.staff.findIndex(s => s.id === id);
  if (idx !== -1) {
    STATE.staff[idx].status = STATE.staff[idx].status === 'Active' ? 'Off Duty' : 'Active';
    renderStaffTable(STATE.staff);
    showToast(`${STATE.staff[idx].fname}'s status updated`);
  }
}

function openAddStaff() { openModal('addStaffModal'); }

function addStaff() {
  const fname = document.getElementById('sfFName').value.trim();
  const lname = document.getElementById('sfLName').value.trim();
  const dept  = document.getElementById('sfDept').value;
  const role  = document.getElementById('sfRole').value.trim();
  const shift = document.getElementById('sfShift').value;
  const phone = document.getElementById('sfPhone').value.trim();
  const email = document.getElementById('sfEmail').value.trim();
  const join  = document.getElementById('sfJoin').value;

  if (!fname || !lname || !role) return showToast('Please fill required fields', 'error');

  const id = 'S' + String(STATE.staff.length + 1).padStart(3, '0');
  STATE.staff.push({ id, fname, lname, dept, role, shift, phone, email, join: join || new Date().toISOString().split('T')[0], status: 'Active' });
  closeModal('addStaffModal');
  renderStaffTable(STATE.staff);
  showToast(`Staff member ${fname} ${lname} added!`);
  ['sfFName','sfLName','sfRole','sfPhone','sfEmail','sfJoin'].forEach(i => { const el = document.getElementById(i); if (el) el.value = ''; });
}

// ═══════ REPORTS ═══════
function renderReports() {
  updateGuestStats();
  renderOccupancyChart();
  renderTrendChart();
}

function renderOccupancyChart() {
  const el = document.getElementById('occupancyChart');
  if (!el) return;
  const months = ['Sep','Oct','Nov','Dec','Jan','Feb'];
  const vals = [72, 68, 85, 91, 77, 78];
  el.innerHTML = months.map((m, i) =>
    `<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:4px;height:100%">
      <div style="width:100%;background:rgba(122,171,114,${vals[i]/100});border-radius:3px;height:${vals[i]}%;border:1px solid rgba(122,171,114,0.4)"></div>
      <div style="font-size:0.55rem;color:var(--text3)">${m}</div>
    </div>`
  ).join('');
}

function renderTrendChart() {
  const el = document.getElementById('trendChart');
  if (!el) return;
  const months = ['Sep','Oct','Nov','Dec','Jan','Feb'];
  const vals = [88000, 95000, 130000, 148000, 112000, 124500];
  const max = Math.max(...vals);
  el.innerHTML = months.map((m, i) =>
    `<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:4px;height:100%">
      <div style="width:100%;background:rgba(201,169,110,0.25);border-radius:3px;height:${vals[i]/max*100}%;border:1px solid rgba(201,169,110,0.5)" title="₹${vals[i].toLocaleString()}"></div>
      <div style="font-size:0.55rem;color:var(--text3)">${m}</div>
    </div>`
  ).join('');
}

// ═══════ SETTINGS ═══════
function showSettingsTab(tab, el) {
  document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.s-nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  el.classList.add('active');
}

// ═══════ HELPERS ═══════
function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function statusBadge(s) {
  const map = { 'Confirmed': 'badge-blue', 'Checked-In': 'badge-green', 'Pending': 'badge-gold', 'Cancelled': 'badge-rose', 'Checked-Out': 'badge-gray' };
  return map[s] || 'badge-gray';
}

function roomStatusBadge(s) {
  const map = { available: 'badge-green', occupied: 'badge-gold', maintenance: 'badge-rose', reserved: 'badge-blue' };
  return map[s] || 'badge-gray';
}

// ═══════ INIT ═══════
document.addEventListener('DOMContentLoaded', () => {
  seedData();
  updateDate();
  setDefaultDates();
  navigate('dashboard');

  // close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) {
        const id = this.id;
        closeModal(id);
      }
    });
  });

  // live bill preview
  document.getElementById('billTax')?.addEventListener('input', previewBill);
  document.getElementById('billDisc')?.addEventListener('input', previewBill);
});