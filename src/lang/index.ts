import config from '../config';

export default {
  MAINTENANCE: '[HOV] Server hiện đang bảo trì... Bạn vui lòng quay lại sau nhé ⏳',

  FIRST_COME: '[HOV] Chào mừng bạn đến với ' + config.APP_DISPLAY_NAME + ' 🥳 Trước khi bắt đầu, hãy chắc chắn rằng bạn đã chọn đúng giới tính người muốn chat cùng.\n\nẤn trợ giúp (hoặc gửi trogiup) để xem thêm.',

  INSTRUCTION: '[HOV] Gửi batdau hoặc bấm vào nút để tìm bạn chat.',

  HELP_TXT: '[HOV] Danh sách các lệnh:\n' +
            '- batdau: Bắt đầu tìm bạn chat\n' +
            '- ketthuc: Kết thúc chat\n' +
            '- trogiup: Xem trợ giúp\n' +
            '- meow: Xem ảnh mèo\n' +
            '- gauw: Xem ảnh cún\n\n' +
            'Các lệnh có thể dùng khi đang không chat:\n' +
            '- timnu: Tìm nữ chat cùng\n' +
            '- timnam: Tìm nam chat cùng',

  START_OKAY: '[HOV] OK! Chúng mình sẽ thông báo khi tìm được người chat cùng nhé 😎',
  START_WARN_GENDER: '[HOV] ⚠️ Lưu ý: Bạn đã không chọn giới tính. Có thể bạn sẽ phải đợi lâu hơn.',
  START_ERR_ALREADY: '[HOV] ❌ Bạn không thể batdau khi chưa ketthuc...',

  WAITING: '[HOV] Đang tìm bạn chat ⏳⏳⏳ Nếu bạn muốn đổi giới tính, gửi ketthuc sau đó chọn giới tính mới.',
  CONNECTED: '[HOV] Đã tìm được bạn chat phù hợp 🎉🎉 Nếu muốn kết thúc đoạn chat, hãy gửi ketthuc.\n\nChúc 2 bạn trò chuyện vui vẻ nhé!\nVui lòng không sử dụng những từ ngữ không phù hợp để giữ môi trường Chatbot văn minh bạn nhé!',

  END_CHAT: '[HOV] Kết thúc cuộc trò chuyện\nGửi batdau hoặc bấm vào nút để tìm bạn chat.',
  END_CHAT_PARTNER: '[HOV]  Oops! Bạn ấy đã ngắt kết nối 😢\nGửi batdau hoặc bấm vào nút để tìm bạn chat.',
  END_CHAT_FORCE: '[HOV] Hiện tại không có ai đang online cả. Bạn hãy thử lại sau nhé :(',

  ERR_ATTACHMENT: '[HOV] ‼️ Lỗi: HOV Chatbot chưa hỗ trợ gửi dạng dữ liệu này',
  ATTACHMENT_LINK: '[HOV] Bạn ấy đã gửi 1 đường link: ',

  GENDER_ERR: '[HOV] ‼️ Lỗi: Giới tính nhập vào không hợp lệ!\n\nẤn trợ giúp (hoặc gửi trogiup) để xem thêm.',
  GENDER_WRITE_OK: '[HOV] ✅ Bạn đã chọn giới tính mong muốn tìm được là: ',
  GENDER_WRITE_WARN: '\n\n⚠️ Lưu ý: Tùy chọn này chỉ có tác dụng với PHẦN LỚN các cuộc nói chuyện.',
  GENDER_ARR_UNKNOWN: 'cả hai',
  GENDER_ARR_MALE: 'nam',
  GENDER_ARR_FEMALE: 'nữ',

  KEYWORD_START: 'batdau',
  KEYWORD_END: 'ketthuc',
  KEYWORD_GENDER: 'tim',
  KEYWORD_GENDER_MALE: 'nam',
  KEYWORD_GENDER_FEMALE: 'nu',
  KEYWORD_GENDER_BOTH: 'namnu',
  KEYWORD_HELP: 'trogiup',
  KEYWORD_CAT: 'meow',
  KEYWORD_DOG: 'gauw',

  ERR_FAKE_MSG: '[HOV] ‼️ Lỗi: Bạn không được giả mạo tin nhắn của bot!',
  ERR_DATABASE: '[HOV] ‼️ Lỗi: Không thể kết nối với database. Hãy báo cho admin thông qua page Humans Of Vo Thi Sau hoặc link feedback ở Menu!',
  ERR_TOO_LONG: '[HOV] ‼️ Lỗi: Tin nhắn quá dài (nhiều hơn 2000 ký tự). Hãy chia nhỏ tin nhắn và gửi nhé.',
  ERR_200: '[HOV] ❌ Bạn chat không thể nhận tin nhắn do đã xóa inbox hoặc block page.',
  ERR_10: '[HOV] ❌ Bạn chat không thể nhận tin nhắn do 2 bạn không nói chuyện trong 24h. Gửi ketthuc để kết thúc chat.',
  ERR_SERVER: '[HOV] ❎ Có lỗi xảy ra với chatbot. Tin nhắn của bạn chưa được xử lý. Bạn hãy thử lại sau 1 phút nữa nhé.',
  ERR_UNKNOWN: '[HOV] ❎ Server xảy ra lỗi nhưng không nghiêm trọng lắm\nHãy gửi ketthuc để thoát ra và thử lại',
};
