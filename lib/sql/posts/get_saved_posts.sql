SELECT 
    users.user_id,
    combos.combo_details
FROM users
JOIN saved  
    ON users.user_id = saved.following_user_id
JOIN combos
    ON combos.combo_id = saved.saved_post_id
