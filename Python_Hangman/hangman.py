import random
word_list = ['python', 'java', 'kotlin', 'javascript']
current_word = random.choice(word_list)
guessed_word = list("-" * len(current_word))
attempts_number = 8
abc_list = "abcdefghijklmnopqrstuvwxyz"
user_letters = []
user_decision = ''
print("H A N G M A N")
while user_decision != 'play':
    user_decision = input('Type "play" to play the game, "exit" to quit: ')
while attempts_number != 0:
    print()
    print(''.join(guessed_word))
    current_letter = input("Input a letter: ")
    if current_letter in abc_list and len(current_letter) == 1:
        if current_letter in current_word or current_letter in user_letters:
            if current_letter not in guessed_word and current_letter not in user_letters:
                for i in range(len(current_word)):
                    if current_word[i] == current_letter:
                        guessed_word[i] = current_letter
            else:
                print("You already typed this letter")
        else:
            print('No such letter in the word')
            attempts_number = attempts_number - 1
    else:
        if len(current_letter) != 1:
            print("You should print a single letter")
        else:
            print("It is not an ASCII lowercase letter")
    user_letters.append(current_letter)
if current_word == guessed_word:
    print("You guessed the word!\nYou survived!")
else:
    print("You are hanged!")
