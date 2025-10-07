import { faker } from '@faker-js/faker';

export class FakerHelpers {

    static generateUsername(): string {
        // Generate a username that meets the requirements:
        // - lowercase letters, numbers, and single hyphens only
        // - between 3 and 39 characters
        // - cannot start or end with a hyphen
        
        const minLength = 3;
        const maxLength = 39;
        const length = faker.number.int({ min: minLength, max: maxLength });
        
        let username = '';
        
        // Start with a letter or number (not hyphen)
        const firstChar = faker.helpers.arrayElement(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
        username += firstChar;
        
        // Add remaining characters
        for (let i = 1; i < length - 1; i++) {
            const char = faker.helpers.arrayElement(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-']);
            username += char;
        }
        
        // End with a letter or number (not hyphen)
        const lastChar = faker.helpers.arrayElement(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
        username += lastChar;
        
        // Clean up any consecutive hyphens
        username = username.replace(/-{2,}/g, '-');
        
        return username;
    }

    static generatePassword(): string {
        return faker.internet.password({ length: 12, memorable: false });
    }

}
